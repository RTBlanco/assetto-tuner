import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-dragdata'

function CarChart() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const options = {
    responsive: true,
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
        onDragStart: function (e) {
          console.log(e)
        },
        onDrag: function (e, datasetIndex, index, value) {
          console.log(datasetIndex, index, value)
        },
        onDragEnd: function (e, datasetIndex, index, value) {
          console.log(datasetIndex, index, value)
        }
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.1
      },
    ],
  };

  
  return <Line options={options} data={data} plugins={options.plugins}/>;
}

export default CarChart;