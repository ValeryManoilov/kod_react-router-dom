import React, { useState } from 'react'
import Header from '../components/Header';

function FormPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <>
            <Header />
            <form >
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