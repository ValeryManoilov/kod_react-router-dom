import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { arr } from './HomePage';
import Header from '../components/Header';
import "../App.css"
import { useLocation } from 'react-router-dom';


function UsersPage() {


    const { id, name } = useParams();

    const location = useLocation();


    return (
        <>
            <br />
            <br />
            <div className='container' > Users Name - {name} <br /> {location.pathname}</div>
        </>
    )
}

export default UsersPage