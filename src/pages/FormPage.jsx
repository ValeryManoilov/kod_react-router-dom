import React, { useState } from 'react'
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";

function FormPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleClick = (e) => {
        navigate("/contacts")
    }

    return (
        <>
            <form onSubmit={handleClick}>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                <button>Click</button>
                {email}
                {password}
            </form>

        </>
    )
}

export default FormPage