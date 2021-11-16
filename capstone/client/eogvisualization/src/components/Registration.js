import React, {useState} from 'react'
import { FormContainer, FormDiv, InputStyle, SubmitButton } from './styled-components/FormStyle';


export default function Login() {

    const [formData, setFormData] = useState({ username: "", password: "", confirmPassword: "", email: "" });

    const buttonStatus = formData.password.length > 0 && formData.password === formData.confirmPassword;
    console.log(buttonStatus)

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/registration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            console.log(response)
        } catch (err) {
            console.log(err.message)
        }
    }

    const clearForm = () => {
        document.getElementById('userForm').reset();
    }

    const clearState = () => {
        setFormData({ username: "", password: "", confirmPassword: "", email: "" });
    }

    const clearData = () => {
        clearForm();
        clearState();
    }

    return (
        <FormDiv>
            <FormContainer id = "userForm" onSubmit = {onSubmitForm}>
                <InputStyle 
                    type = "text" 
                    name = "username" 
                    placeholder = "username" 
                    onChange={(e) => 
                        setFormData(
                            {...formData, [e.target.name]: e.target.value}
                        )}
                />
                <InputStyle
                    type = "password" 
                    name = "password" 
                    placeholder = "password" 
                    onChange={(e) => 
                        setFormData(
                            {...formData, [e.target.name]: e.target.value}
                        )}
                />
                <InputStyle
                    type = "password" 
                    name = "confirmPassword" 
                    placeholder = "confirm password" 
                    onChange={(e) => 
                        setFormData(
                            {...formData, [e.target.name]: e.target.value}
                        )}
                />
                <InputStyle 
                    type = "text" 
                    name = "email" 
                    placeholder = "email" 
                    onChange={(e) => 
                        setFormData(
                            {...formData, [e.target.name]: e.target.value}
                        )}
                />
                <SubmitButton disabled = {!buttonStatus} onClick={() => clearForm()}>Submit</SubmitButton>
            </FormContainer>
        </FormDiv>
    )
}
