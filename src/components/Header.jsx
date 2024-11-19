import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav >
                <ul
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "40px",
                        background: "white",
                        color: "black",
                        fontSize: "24px"
                    }}
                >
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/about">О нас</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/form">From</Link>
                    </li>
                    <li>
                        <Link to="/hasljdakjdhkjadhajsdhajksdhkjasdh">wrong page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header