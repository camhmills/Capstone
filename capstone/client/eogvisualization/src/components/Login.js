import React, {useState} from 'react'

export default function Login() {

    const [formData, setFormData] = useState({})

    return (
        <div>
            <form>
                <input type = "text" placeholder = "username"value = {formData} onChange={(e) => setFormData(e.target.value)}/>
                <input type = "text"/>
                <input type = "text"/>
                <button>Submit</button>
            </form>
        </div>
    )
}
