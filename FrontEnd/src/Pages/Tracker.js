import './Tracker.css'
import GaugeChart from '../Components/GaugeChart';
import PieChart from '../Components/PieChart';
import * as Constants from '../Constants/ChartDefaults';
import React from 'react';

const PieData = {
    labels: ["Test1", "Test2", "Test3"],
    datasets: [
        {
            label: 'IDK',
            data: [1234, 5930, 12800],
            backgroundColor: Constants.ChartDefaults.backgrounds,
            borderColor: Constants.ChartDefaults.borders,
            borderWidth: 1,
        },
    ],
};

const PieOptions = {
    responsive: true,
};

function TrackerPage() {
    return (
        <div className='TrackerContainer'>
            <div className='TrackerOverview'>
                <div className='PieContainer'>
                    <PieChart data={PieData} options={PieOptions}/>
                </div>
            </div>
            <div className='TrackerBreakdown'>
                Breakdown
            </div>
        </div>
    );
}

export default TrackerPage;