import './App.css';
import AppContainer from './Components/AppContainer';
import ExpenseChart from './Pages/ExpenseChart';
import TrackerPage from './Pages/Tracker';
import React, { useState } from 'react';

function App() {

  const [flagValue, setFlagValue] = useState(false);

  const handleFlagSwitch = () => {
    setFlagValue(!flagValue);
  };

  var currentPage = flagValue ? <h1>Hey there</h1> : <ExpenseChart />

  return (
    <AppContainer page={<TrackerPage/>}></AppContainer>
  );
}

export default App;
