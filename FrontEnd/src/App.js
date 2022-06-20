import './App.css';
import AppContainer from './Components/AppContainer';
import ExpenseChart from './Pages/ExpenseChart';
import React, { useState } from 'react';

function App() {

  const [flagValue, setFlagValue] = useState(false);

  const handleFlagSwitch = () => {
    setFlagValue(!flagValue);
  };

  var currentPage = flagValue ? <h1>Hey there</h1> : <ExpenseChart />

  return (
    <AppContainer></AppContainer>
  );
}

export default App;
