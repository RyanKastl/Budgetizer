import './App.css';
import { Pie } from 'react-chartjs-2';
import React, { useState } from 'react';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function PieChart(props) {
  return (
    <>
      <div className='header'>
        <h1 className='title'>Pie Chart</h1>
      </div>
      <Pie data={props.data} />
    </>
  );
};

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
      <input className="Data-control-input" type="text" value={labelValue} onChange={handleLabelInput} />
      <input className="Data-control-input" type="text" value={amountValue} onChange={handleAmountInput} />
      <button className="Data-control-add" onClick={ resetInputField }>Add Data</button>
    </div>
  );
  
}

class Data extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataList: [
        { label: "test", amount: "300" },
        { label: "blah", amount: "45"  },
        { label: "sup",  amount: "839" },
      ]
    }
  }

  handleOnAdd(label, amount) {
    const newDL = this.state.dataList.concat([{label:label, amount:amount}]);
    this.setState({
      dataList: newDL
    });
    this.state.dataList.push({label: label, amount: amount});
  }


  render() {

    const dataMap = this.state.dataList.map((item, index) => {
      return (
      <DataItem key={index} label={item.label} value={item.amount} />
      );
    });

    return (
      <div className="Data">
        <DataControl onAdd={(l,v) => this.handleOnAdd(l, v)} />
        {dataMap}
      </div>
    );
  };
}

function App() {

  const testData = data;

  return (
    <div className="App">
      <header className="Chart-body">
        <PieChart className="Chart-body" data={testData}/>
      </header>
      <Data />
    </div>
  );
}

export default App;
