import '../App.css';
import './GaugeChart.css';
import { Doughnut } from 'react-chartjs-2';

const defaultOptions = 
{
    //maintainAspectRatio: false, 
    circumference: 300, 
    rotation: 210, 
    cutout: "95%",
    plugins: {
        legend: {
            display: false,
        }
    },
};

function GaugeChart(props) {
    return (
        <div style={{border: "1px solid blue"}}>
            <Doughnut options={defaultOptions} 
                      data={props.data} />
            <h1 className='Chart-Label'>Test</h1>
        </div>
    );
};

export default GaugeChart;