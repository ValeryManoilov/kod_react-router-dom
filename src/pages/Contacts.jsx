import React from 'react'
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';

function Contacts() {

    const location = useLocation();

    console.log(location)

    return (
        <div>
            +7083910238128390123 ----- - -- - - {location.pathname}</div>
    )
}

export default Contacts