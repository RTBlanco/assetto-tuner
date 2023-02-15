import './App.css';
import PowerInput from './components/PowerInput';
import { useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-dragdata'

const fs = window.require('fs')
const pathModule = window.require('path')

function App() {
  const [rpm, setRpm] = useState([])
  const [nm, setNm] = useState([])
  const [bhp, setBhp] = useState([])
  const [powerText, setPowerText] = useState('')
  const ref = useRef([])

  ref.rpm = rpm
  ref.nm = nm
  ref.bhp = bhp

  const enterData = (e) => {
    let power = document.getElementsByTagName('textarea')[0].value
    let powerArray = power.split(/\r|\n/g)
  
    let preRpm = []
    let prenm = []
    let prebhp = []

    for (let i of powerArray) {
      let rpmValue = i.split('|')[0]
      let nmValue = i.split('|')[1]
      let bhpValue = converToBhp(rpmValue, nmValue)

      preRpm.push(rpmValue)
      prenm.push(nmValue)
      prebhp.push(bhpValue)
    }

    setRpm(preRpm)
    setNm(prenm)
    setBhp(prebhp)
    setPowerText(power)
  }

  const updatedPower = () => {
    let str = ''
    for( let i = 0; i < ref.rpm.length; i++) {

      // if iteration is the last one remove new line
      if ((i + 1) < ref.rpm.length ) {
        str = str + `${ref.rpm[i]}|${ref.nm[i]}\n`
      } else {
        str = str + `${ref.rpm[i]}|${ref.nm[i]}`
      }
    }

    setPowerText(str)
  }

  const handleChange = e => {
    enterData()
    setPowerText(e.target.value)
  }

  const converToBhp = (number, torque) => {
    return (number * torque) / 7127
  }

  ref.rpm = rpm
  ref.nm = nm
  const labels = ref.rpm;

  const data = {
    labels,
    datasets: [{
      label: 'Nm',
      data: ref.nm,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.1,
      dragData: true
    },{
      label: 'BHP',
      data: ref.bhp,
      borderColor: 'rgb(12, 87, 248)',
      backgroundColor: 'rgba(12, 87, 248, 0.5)',
      tension: 0.1,
      dragData: false
    }],
  };
  
  const options = {
    responsive: true,
    scales: {
      y:{
        position: 'right',
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Assetto Tuner',
      },
      dragData: {
        round: 1,
        onDragStart: (e) => {
          console.log(e)
        },
        onDrag: (e, datasetIndex, index, value) => {
          // console.log(datasetIndex, index, value)
          updatedPower()
        },
        onDragEnd: (e, datasetIndex, index, value) => {
          // console.log(datasetIndex, ref.rpm[index], value)
          enterData()
        }
      },
    },
  };

  return(
    <>
      <h1 id='title'>Assetto Tuner</h1>
      <div className="app">
        <PowerInput handleChange={handleChange} powerText={powerText}/>
        <div id='dyno-graph'>
          <Line options={options} data={data} plugins={options.plugins}/>
        </div>
      </div>
    </>
  )
}

export default App;
