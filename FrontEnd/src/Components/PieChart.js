import '../App.css';
import { Pie } from 'react-chartjs-2';

function PieChart(props) {
    return (
        <div>
            {/* <div className='header'>
                <h1 className='title'>Expenses</h1>
            </div> */}
            <Pie data={props.data} />
        </div>
    );
};

export default PieChart;