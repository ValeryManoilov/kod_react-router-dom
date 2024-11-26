import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { arr } from './HomePage';
import Header from '../components/Header';
import "../App.css"

function UsersPage() {


    const { id, name } = useParams();



    return (
        <>
            <Header />
            <br />
            <br />
            <div className='container' > Users Name - {name} </div>
        </>
    )
}

export default UsersPage