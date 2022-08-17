import './App.css';
import AppContainer from './Components/AppContainer';
import ExpenseChart from './Pages/ExpenseChart';
import TrackerPage from './Pages/Tracker';
import React from 'react';

function App() {

  const pages = [
    <TrackerPage/>,
    <ExpenseChart/>
  ];

  const panelLabels = [
    "Goals",
    "Monthly"
  ];

  return (
    <AppContainer pages={pages} labels={panelLabels}></AppContainer>
  );
}

export default App;
