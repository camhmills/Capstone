import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MainContainerDiv, SubContainer } from './components/styled-components/MainContainer';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/plotcontainers/Home';
import Profile from './components/Profile';

function App() {
  const loginStatus = useSelector(state => state.LoginReducer)

  return (
    <Router>
      <MainContainerDiv>
      <Navbar loginStatus={loginStatus}/>
      <SubContainer>
        <Routes>
          <Route path = '/login' element = {<Login loginStatus = {loginStatus}/>}/>
          <Route path = '/register' element = {<Registration/>}/>
          <Route path = '/home' element = {<PrivateRoute loginStatus = {loginStatus}/>}>
            <Route path = '/home' element = {<Home />}/>
          </Route>
          <Route path = '/profile' element = {<PrivateRoute loginStatus = {loginStatus}/>}>
            <Route path = '/profile' element = {<Profile loginStatus = {loginStatus}/>}/>
          </Route>
        </Routes>
      </SubContainer>
    </MainContainerDiv> 
    </Router>
  );
}

export default App;
