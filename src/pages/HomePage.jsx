import React from 'react'
import Header from "../components/Header";
import { Link } from 'react-router-dom';
function HomePage() {
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            background: "red"
        }}>
            <Header />
            <Link to="/settings">Settings page</Link>
            HomePage
        </div>
    )
}

export default HomePage