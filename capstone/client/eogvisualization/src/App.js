import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import OilTemp from './components/plotcontainers/OilTemp';
import InjValveOpen from './components/plotcontainers/InjValveOpen';
import FlareTemp from './components/plotcontainers/FlareTemp';
import TubingPressure from './components/plotcontainers/TubingPressure';
import WaterTemp from './components/plotcontainers/WaterTemp';
import CasingPressure from './components/plotcontainers/CasingPressure';
import { MainContainerDiv, SubContainer } from './components/styled-components/MainContainer';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const oilTempData = useSelector(state => state.OilTempReducer)
  const caseData = useSelector(state => state.CasingPressureReducer)
  const tubeData = useSelector(state => state.TubingPressureReducer)
  const waterTempData = useSelector(state => state.WaterTempReducer)
  const flareData = useSelector(state => state.FlareTempReducer)
  const injValveData = useSelector(state => state.InjValveOpenReducer)
  const loginStatus = useSelector(state => state.LoginReducer)

  console.log(loginStatus)

  return (
    <Router>
      <MainContainerDiv>
      <Navbar/>
      <SubContainer>
        <Routes>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/register' element = {<Registration/>}/>
          <Route path = '/oiltemp' element = {<PrivateRoute loginStatus = {loginStatus}/>}>
            <Route path = '/oiltemp' element = {<OilTemp oilTempData = {oilTempData}/>}/>
          </Route>
          <Route path = '/casingpressure' element = {<CasingPressure caseData = {caseData}/>}/>
          <Route path = '/flaretemp' element = {<FlareTemp flareData = {flareData}/>}/>
          <Route path = '/injvalveopen' element = {<InjValveOpen injValveData = {injValveData}/>}/>
          <Route path = '/tubingpressure' element = {<TubingPressure tubeData = {tubeData}/>}/>
          <Route exact path = '/watertemp' element = {<WaterTemp waterTempData = {waterTempData}/>}/>
        </Routes>
      </SubContainer>
    </MainContainerDiv> 
    </Router>
  );
}

export default App;
