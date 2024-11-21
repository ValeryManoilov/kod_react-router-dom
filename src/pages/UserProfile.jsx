import React, { useEffect, useState } from 'react'


function UserProfile() {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true)

    async function loadData() {
        await fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((res) => res.json())
            .then((data) => { setUserData(data); setLoading(false) })
    }

    useEffect(() => {
        loadData()
    }, [])

    if (loading) return <div>Loading.....</div>

    return (
        <div>
            <h1>{userData.name}</h1>
            <h1>{userData.email}</h1>
            <h1>{userData.phone}</h1>
            <h1>{userData.website}</h1>
        </div>
    )
}

export default UserProfile