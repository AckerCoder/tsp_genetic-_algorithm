import './App.css';

import MyChart from './chart.component';
import MapChart from './MapChart.component';

import {dataForChart} from './utils';

const App = () => {

 
  return (
    <div className="App">
      <MyChart dataForChart={dataForChart}/>
      <MapChart/>
    </div>
  );
}

export default App;
