import './App.css';
import { Pie } from 'react-chartjs-2';

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

const PieChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Pie Chart</h1>
    </div>
    <Pie data={data} />
  </>
);

function DataControl() {
  return (
    <div className="Data-control">
      <form>
        <input type="text"></input>
        <input type="text"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="Chart-body">
        <PieChart className="Chart-body"/>
      </header>
      <div className="Data-container">
        <DataControl />
        <div className="Data-item">Test item</div>
        <div className="Data-item">Test item</div>
      </div>
    </div>
  );
}

export default App;
