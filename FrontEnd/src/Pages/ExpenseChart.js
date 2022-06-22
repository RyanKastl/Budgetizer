import './ExpenseChart.css';
import '../App.css';
import * as Constants from '../Constants/ChartDefaults';
import PieChart from '../Components/PieChart';
//import GaugeChart from '../Components/GaugeChart';
import React, { useState } from 'react';

function DataItem(props) {
    return (
        <div className="Data-item">
            {props.label}: {props.value}
        </div>
    );
}

function DataControl(props) {
    const [labelValue, setLabelValue] = useState("");
    const [amountValue, setAmountValue] = useState("");

    const handleLabelInput = (e) => {
        setLabelValue(e.target.value);
    };

    const handleAmountInput = (e) => {
        setAmountValue(e.target.value);
    }

    const resetInputField = () => {
        props.onAdd(labelValue, amountValue);
        setLabelValue("");
        setAmountValue("");
    };

    return (
        <div className="Data-control">
            <input className="Data-control-input" type="text" value={labelValue} onChange={handleLabelInput} placeholder="Label" />
            <input className="Data-control-input" type="number" value={amountValue} onChange={handleAmountInput} placeholder="Amount" />
            <button className="Data-control-add" onClick={resetInputField}>Add Data</button>
        </div>
    );

}

class ExpenseChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataList: []
        }
    }

    handleOnAdd(label, amount) {
        const newDL = this.state.dataList.concat([{ label: label, amount: amount }]);
        this.setState({
            dataList: newDL
        });
        this.state.dataList.push({ label: label, amount: amount });
    }


    render() {

        const dataMap = this.state.dataList.map((item, index) => {
            return (
                <DataItem key={index} label={item.label} value={item.amount} />
            );
        });

        const labels = this.state.dataList.map(item => {
            return item.label;
        });

        const amounts = this.state.dataList.map(item => {
            return item.amount;
        });

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'IDK',
                    data: amounts,
                    backgroundColor: Constants.ChartDefaults.backgrounds,
                    borderColor: Constants.ChartDefaults.borders,
                    borderWidth: 1,
                },
            ],
        };

        return (
            <div className="App">
                <header className="Chart-body">
                    <PieChart className="Chart-body" data={data} />
                </header>
                <div className="Data">
                    <DataControl onAdd={(l, v) => this.handleOnAdd(l, v)} />
                    {dataMap}
                </div>
            </div>
        );
    };
}

export default ExpenseChart;
