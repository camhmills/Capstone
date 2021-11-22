import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContainer, FormDiv, InputStyle, SubmitButton } from './styled-components/FormStyle';


export default function Login() {
    const [formData, setFormData] = useState({ username: "", password: "", confirmPassword: "", email: "" });
    const navigate = useNavigate();
    //buttuon disabled condition
    const buttonStatus = formData.password.length > 0 
    && formData.password === formData.confirmPassword
    && formData.email.search('@') !== -1;

    const registerNav = () => {
        navigate('/login');
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/registration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            registerNav()
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <FormDiv>
            <FormContainer id = "userForm" onSubmit = {onSubmitForm}>
            <h2>
                Register
            </h2>
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
                <SubmitButton disabled = {!buttonStatus}>Submit</SubmitButton>
            </FormContainer>
        </FormDiv>
    )
}
