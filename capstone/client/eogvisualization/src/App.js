import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import OilTemp from './components/plotcontainers/OilTemp';
import InjValveOpen from './components/plotcontainers/InjValveOpen';
import FlareTemp from './components/plotcontainers/FlareTemp';
import TubingPressure from './components/plotcontainers/TubingPressure';
import WaterTemp from './components/plotcontainers/WaterTemp';
import CasingPressure from './components/plotcontainers/CasingPressure';
import { MainContainerDiv } from './components/styled-components/MainContainer';
import Navbar from './components/Navbar';

function App() {
  const oilTempData = useSelector(state => state.OilTempReducer)
  const caseData = useSelector(state => state.CasingPressureReducer)
  const tubeData = useSelector(state => state.TubingPressureReducer)
  const waterTempData = useSelector(state => state.WaterTempReducer)
  const flareData = useSelector(state => state.FlareTempReducer)
  const injValveData = useSelector(state => state.InjValveOpenReducer)

  return (
    <Router>
      <MainContainerDiv>
      <Navbar/>  
      <Routes>
        <Route path = '/oiltemp' element = {<OilTemp oilTempData = {oilTempData}/>}/>
        <Route path = '/casingpressure' element = {<CasingPressure caseData = {caseData}/>}/>
        <Route path = '/flaretemp' element = {<FlareTemp flareData = {flareData}/>}/>
        <Route path = '/injvalveopen' element = {<InjValveOpen injValveData = {injValveData}/>}/>
        <Route path = '/tubingpressure' element = {<TubingPressure tubeData = {tubeData}/>}/>
        <Route exact path = '/watertemp' element = {<WaterTemp waterTempData = {waterTempData}/>}/>
      </Routes>
    </MainContainerDiv> 
    </Router>
  );
}

export default App;
