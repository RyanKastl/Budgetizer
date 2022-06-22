import './AppContainer.css';
import React, { useState } from 'react';

function AppContainer(props) {

  return (
    <div className="AppContainer">
      <div className='AppBanner'>Budgetizer</div>
      {props.page}
    </div>
  );
}

export default AppContainer;