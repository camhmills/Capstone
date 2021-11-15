import React, {useState} from 'react'

export default function Login() {

    const [formData, setFormData] = useState({username: "", password: ""})

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/userlogin", {
                method: "POST",
                headers : { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            console.log(response)
        }
        catch (err) {
            console.log(err.message)
        }

    }

    const clearForm = () => {
        document.getElementById('userForm').reset();
    }

    return (
        <div>
            <form id = "userForm" onSubmit = {onSubmitForm}>
                <input type = "text" placeholder = "username" name = "username" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
                <input type = "password" placeholder = "password" name = "password" onChange = {(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
                <button onClick = {() => clearForm()}>Submit</button>
            </form>
        </div>
    )
}
