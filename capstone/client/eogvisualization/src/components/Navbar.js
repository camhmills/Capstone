import React from 'react'
import { HeaderDiv, TitleH } from './styled-components/NavbarStyle'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SubmitButton } from './styled-components/FormStyle';

export default function Navbar(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loginStatus } = props;

    const logout = () => {
        localStorage.removeItem('jsonwebtoken')
        dispatch({type: "LOGOUT"})
    }

    return loginStatus.loggedin ?
        <HeaderDiv>
            <TitleH>
                GraphIt
            </TitleH>
            <SubmitButton onClick={() => navigate('/home')}>
                Home
            </SubmitButton>
            <SubmitButton onClick={() => navigate('/profile')}>
                Profile
            </SubmitButton>
            <SubmitButton onClick={() => logout()}>
                Logout
            </SubmitButton> 
        </HeaderDiv>
     : 
        <HeaderDiv>
            <TitleH>
                    GraphIt
            </TitleH>
            <SubmitButton onClick={() => navigate('/register')}>
                Register
            </SubmitButton>
            <SubmitButton onClick={() => navigate('/login')}>
                Login
            </SubmitButton>
        </HeaderDiv>
}
