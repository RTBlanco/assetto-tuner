import './App.css';
import { useState } from 'react';
import CarChart from '../component/CarChart';


function App() {
  const [power, setPower] = useState('')
  const [rpm, setRpm] = useState([])
  const [bhp, setBhp] = useState([])

  const handleClick = (e) => {
    setPower(document.getElementsByTagName('textarea')[0].value)
    convertToData()
  }

  const convertToData = () => {
    let powerArray = power.split(/\r|\n/g)
    
    let preRpm = []
    let preBhp = []

    for (let i of powerArray) {
      preRpm.push(i.split('|')[0])
      preBhp.push(i.split('|')[1])  
    }

    setRpm(preRpm)
    setBhp(preBhp)
  }

  return(
    <>
      <div>
        <textarea></textarea>
        <button onClick={handleClick}>Enter</button>
      </div>
      <CarChart rpm={rpm} bhp={bhp}/>
    </>
  )
}

export default App;
