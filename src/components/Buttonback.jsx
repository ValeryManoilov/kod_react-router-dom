import React from 'react';
import { useNavigate } from 'react-router-dom';

function Buttonback() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    }


    return (
        <button onClick={() => handleNavigate()} style={{
            position: "absolute",
            top: 10,
            left: 10,
            borderRadius: "50%",
            border: "1px solid black"
        }}>
            {"<-"}
        </button>
    )
}

export default Buttonback