import React, {useState} from 'react'


export default function Login() {

    const [formData, setFormData] = useState({ username: "", password: "", email: "" });

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
        setFormData({ username: "", password: "", email: "" });
    }

    const clearData = () => {
        clearForm();
        clearState();
    }

    return (
        <div>
            <form id = "userForm" onSubmit = {onSubmitForm}>
                <input 
                    type = "text" 
                    name = "username" 
                    placeholder = "username" 
                    onChange={(e) => 
                        setFormData(
                            {...formData, [e.target.name]: e.target.value}
                        )}
                />
                <input
                    type = "text" 
                    name = "password" 
                    placeholder = "password" 
                    onChange={(e) => 
                        setFormData(
                            {...formData, [e.target.name]: e.target.value}
                        )}
                />
                <input 
                    type = "text" 
                    name = "email" 
                    placeholder = "email" 
                    onChange={(e) => 
                        setFormData(
                            {...formData, [e.target.name]: e.target.value}
                        )}
                />
                <button onClick={() => clearForm()}>Submit</button>
            </form>
        </div>
    )
}
