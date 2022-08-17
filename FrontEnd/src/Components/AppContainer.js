import './AppContainer.css';
import React, { useState } from 'react';

function AppContainer(props) {

  const [currentPage, setPage] = useState(props.pages[0]);

  const switchPage = (page) => {
    setPage(page);
  };

  const labels = props.labels.map((lbl, index) => {
    
    return(
    <span onClick={() => switchPage(props.pages[index])}>{lbl}   </span>
    );
  });

  return (
    <div className="AppContainer">
      <div className='AppBanner'>Budgetizer</div>
      <div className='AppContent'>{currentPage}</div>
      <div className='AppFooter'>{labels}</div>
    </div>
  );
}

export default AppContainer;