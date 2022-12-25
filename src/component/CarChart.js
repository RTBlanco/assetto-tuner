import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-dragdata'

function CarChart({rpm, bhp}) {
  const labels = rpm;

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
        text: 'Chart.js Line Chart',
      },
      dragData: {
        round: 1,
        onDragStart: (e) => {
          console.log(e)
        },
        onDrag: (e, datasetIndex, index, value) => {
          // console.log(datasetIndex, index, value)
        },
        onDragEnd: (e, datasetIndex, index, value) => {
          console.log(datasetIndex, rpm[index], value)
        }
      },
    },
  };

  const data = {
    labels,
    datasets: [{
      label: 'Dataset 1',
      data: bhp,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.1,
      dragData: true
    }]
    // },{
    //   label: 'Dataset 2',
    //   data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
    //   borderColor: 'rgb(12, 87, 248)',
    //   backgroundColor: 'rgba(12, 87, 248, 0.5)',
    //   tension: 0.1,
    //   dragData: true
    // }],
  };
  
  console.log(rpm)
  console.log(bhp)
  
  return <Line options={options} data={data} plugins={options.plugins}/>;
}

export default CarChart;