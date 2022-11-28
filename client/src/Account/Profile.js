import React from 'react'
import NavBar from '../NavBar/NavBar'

function Profile({ user } ){
    return(
        <div>
            <NavBar/>
            <h1>Hello {user.name}</h1>
            <img src={user.image} alt={user.username} width={100} height={100} />
            <p>{user.bio}</p>
        </div>
    )
}

export default Profile