import './AppContainer.css';
import React, { useState } from 'react';

function AppContainer(props) {

  return (
    <div className="AppContainer">
      <div className='AppBanner'>Budgetizer</div>
      <div className='AppContent'>{props.page}</div>
      <div className='AppFooter'>Panel</div>
    </div>
  );
}

export default AppContainer;