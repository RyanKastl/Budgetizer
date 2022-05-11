import './App.css';
import Data from './Pages/ExpenseChart';
import React, { useState } from 'react';

function App() {

  const [flagValue, setFlagValue] = useState(false);

  const handleFlagSwitch = () => {
    setFlagValue(!flagValue);
  };

  var currentPage = flagValue ? <h1>Hey there</h1> : <Data />

  return (
    <div>
      <button className="Data-control-add" onClick={ handleFlagSwitch }>Switch Page</button>
      {currentPage}
    </div>
  );
}

export default App;
