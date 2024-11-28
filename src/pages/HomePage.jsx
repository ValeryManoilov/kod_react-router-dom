import React from 'react'
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import "../App.css";

export const arr = [
    {
        name: "Nikita",
        phoneNumber: "+77777777",
        id: 1
    },
    {
        name: "Darya",
        phoneNumber: "+77777777",
        id: 2
    },
    {
        name: "Nastya",
        phoneNumber: "+77777777",
        id: 3
    },
    {
        name: "Valeriy",
        phoneNumber: "+77777777",
        id: 4
    },
    {
        name: "Grigory",
        phoneNumber: "+77777777",
        id: 5
    },
    {
        name: "Lesya",
        phoneNumber: "+77777777",
        id: 6
    },
    {
        name: "Angelina",
        phoneNumber: "+77777777",
        id: 7
    },
    {
        name: "Adilhan",
        phoneNumber: "+77777777",
        id: 10
    }
]


function HomePage() {


    return (
        <div style={{
            width: "100%",
            height: "100vh",

        }}>
            <br />
            <br />
            <br />

            <div className='container'>
                {
                    arr.map((el) => <Link className='containerEl' to={`/home/${el.id}/${el.name}`} key={el.id}>
                        <h5>{el.name}</h5>
                        <h6>{el.phoneNumber}</h6>
                    </Link>)
                }
            </div>
        </div>
    )
}

export default HomePage