import './Tracker.css'
import GaugeChart from '../Components/GaugeChart';
import BarGauge from '../Components/BarGauge';
import React from 'react';

const AllocationData = {
    labels: ["Test1"],
    datasets: [
        {
            label: 'Allocated',
            data: [1234],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
        {
            label: 'Free',
            data: [5930],
            backgroundColor: 'rgba(99, 255, 86, 0.2)',
            borderColor: 'rgba(99, 255, 86, 1)',
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
                    <BarGauge data={AllocationData} options={PieOptions}/>
                </div>
            </div>
            <div className='TrackerBreakdown'>
                <div className='GaugeContainer'>
                    <GaugeChart data={AllocationData} options={PieOptions}/>
                </div>
            </div>
        </div>
    );
}

export default TrackerPage;