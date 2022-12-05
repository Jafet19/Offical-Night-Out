import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import AccountUpdate from './AccountUpdate'

function Profile({ user, setUser } ){
    const [show, setShow] = useState(false)

    return(
        <div>
            <NavBar/>
            <h1>Hello {user.name}</h1>
            <img src={user.image} alt={user.username} width={100} height={100} />
            <p>{user.bio}</p>
            <button onClick={()=> setShow((show)=> !show)}>Show/hide form</button>
        {show ? <AccountUpdate user={user} setUser={setUser}/> : false}
        </div>
    )
}

export default Profile