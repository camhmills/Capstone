import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { FormContainer, FormDiv, InputStyle, SubmitButton } from './styled-components/FormStyle';

export default function Login() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({username: "", password: ""})

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/userlogin", {
                method: "POST",
                headers : { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                dispatch({type:"LOGIN"})
            }
            else {
                window.alert("Login Failed. Please Try Again.")
            }
        }
        catch (err) {
            console.log(err.message)
        }

    }

    const clearForm = () => {
        document.getElementById('userForm').reset();
    }

    return (
        <FormDiv>
            <FormContainer id = "userForm" onSubmit = {onSubmitForm}>
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
                <SubmitButton onClick = {() => clearForm()}>Submit</SubmitButton>
            </FormContainer>
        </FormDiv>
    )
}
