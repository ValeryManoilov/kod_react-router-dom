import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import styled from 'styled-components'

const HeaderLink = styled(Link)`
    text-decoration: none;
    & ::marker {
        list-style-type: none;
    }
`

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <HeaderLink to="/">Главная</HeaderLink>
                    </li>
                    <li>
                        <HeaderLink to="/about">О нас</HeaderLink>
                    </li>
                    <li>
                        <HeaderLink to="/settings">Настройки</HeaderLink>
                    </li>
                    <li>
                        <HeaderLink to="/contacts">Контакты</HeaderLink>
                    </li>
                    <li>
                        <HeaderLink to="/form">Форма</HeaderLink>
                    </li>
                    <li>
                        <HeaderLink to="/auth">Авторизация</HeaderLink>
                    </li>
                    <li>
                        <HeaderLink to="/hasljdakjdhkjadhajsdhajksdhkjasdh">404</HeaderLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header