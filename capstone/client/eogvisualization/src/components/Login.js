import React, { useState } from 'react';
import { FormContainer, FormDiv, InputStyle, SubmitButton } from './styled-components/FormStyle';
import { Navigate } from 'react-router';
import { useDispatch } from 'react-redux';
import jwt from 'jsonwebtoken';

export default function Login(props) {
    const dispatch = useDispatch();
    const { loginStatus } = props;
    const [formData, setFormData] = useState({username: "", password: ""});

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            await fetch("http://localhost:3001/userlogin", {
                method: "POST",
                headers : { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            }).then(response => response.json())
            .then(result => {
                if (result.success === true) {
                    const token = result.token
                    localStorage.setItem('jsonwebtoken', token)
                    const authorization = () => {
                        const verified = jwt.verify(token, '94camISrad64')
                        dispatch({type: 'SUCCESS', payload: verified})
                    }
                    authorization();
                }
                else {
                    window.alert('Login Failed')
                }
            })
        }
        catch (err) {
            console.log(err.message)
        }

    }
    
    return !loginStatus.loggedin ? 
        <FormDiv>
            <FormContainer id = "userForm" onSubmit = {onSubmitForm}>
                <h2>Login</h2>
                <InputStyle 
                    type = "text"
                    placeholder = "username" 
                    name = "username" 
                    onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                />
                <InputStyle 
                    type = "password" 
                    placeholder = "password" 
                    name = "password" 
                    onChange = {(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                />
                <SubmitButton>Submit</SubmitButton>
            </FormContainer>
        </FormDiv>
     : <Navigate to = "/profile"/>
}
