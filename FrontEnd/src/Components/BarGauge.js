import { Bar } from 'react-chartjs-2';

const defaultOptions = {
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

function BarGauge(props) {
    return (
        <div style={{border: "1px solid blue"}}>
            <Bar options={defaultOptions} 
                      data={props.data} />
            <h1>Test</h1>
        </div>
    );
};

export default BarGauge;