import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { InputStyle } from './styled-components/FormStyle';
import { ProfileActionDiv, ProfileButton, ProfileForm, ProfileInfoDiv } from './styled-components/ProfileStyle'

export default function ProfileAction(props) {
    const { loginStatus } = props;
    const [formData, setFormData] = useState({ newPassword: "", password: "", username: loginStatus.username })
    const navigate = useNavigate()
    const buttonStatus = formData.newPassword.length > 0 
    && formData.password !== formData.newPassword

    const navigateDelete = () => {
        navigate('/register');
    }

    const deleteAccount = async () => {
        try {
            await fetch("http://localhost:3001/deleteuser", {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username : loginStatus.username})
            })
            navigateDelete();
        }
        catch (err) {
            console.log(err.message)
        }
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            await fetch ("http://localhost:3001/update", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
        }
        catch (err) {
            console.log(err.message)
        }
    }

    return (
        <ProfileInfoDiv>
            <ProfileActionDiv>
                <ProfileButton onClick = {() => deleteAccount()}>Delete Account</ProfileButton>
            </ProfileActionDiv>
                <ProfileForm onSubmit = {onSubmitForm}>
                    <InputStyle 
                        type = "text"
                        placeholder = "old password" 
                        name = "password" 
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                    />
                    <InputStyle 
                        type = "text" 
                        placeholder = "new password" 
                        name = "newPassword" 
                        onChange = {(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                    />
                    <ProfileButton disabled = {!buttonStatus}>Change Password</ProfileButton>
                </ProfileForm>
        </ProfileInfoDiv>
    )
}