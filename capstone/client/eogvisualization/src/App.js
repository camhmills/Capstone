import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

import OilTemp from './components/OilTemp';
import InjValveOpen from './components/InjValveOpen';
import FlareTemp from './components/FlareTemp';
import TubingPressure from './components/TubingPressure';
import WaterTemp from './components/WaterTemp';
import CasingPressure from './components/CasingPressure';
import { MainContainerDiv } from './components/styled-components/MainContainer';

function App() {
  const oilTempData = useSelector(state => state.OilTempReducer)
  const caseData = useSelector(state => state.CasingPressureReducer)
  const tubeData = useSelector(state => state.TubingPressureReducer)
  const waterData = useSelector(state => state.WaterTempReducer)
  const flareData = useSelector(state => state.FlareTempReducer)
  const injValveData = useSelector(state => state.InjValveOpenReducer)

  return (
    <Router>
      <MainContainerDiv>
      <Routes>
        <Route path = '/oiltemp' element = {<OilTemp oilTempData = {oilTempData}/>}/>
        <Route path = '/casingpressure' element = {<CasingPressure/>}/>
        <Route path = '/flaretemp' element = {<FlareTemp/>}/>
        <Route path = '/injvalveopen' element = {<InjValveOpen/>}/>
        <Route path = '/tubingpressure' element = {<TubingPressure/>}/>
        <Route path = '/watertemp' element = {<WaterTemp/>}/>
      </Routes>
    </MainContainerDiv> 
    </Router>
  );
}

export default App;
