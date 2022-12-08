import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import AccountUpdate from './AccountUpdate'

function Profile({ user, setUser } ){
    const [show, setShow] = useState(false)

    return(
        <div className="main">
            <NavBar/>
        <div className="container">
            <div className="gradient">
                <div className="content">
                <img className='Profile-Image' src={user.image} alt={user.name}/>
                    <h2>{user.username}</h2>
                    <p>My name is: {user.name}</p>
                    <p className="details">{user.bio}</p>
                    <div className="icons">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
        <button className="button-28" onClick={()=> setShow((show)=> !show)}>Edit Profile</button>
{show ? <AccountUpdate user={user} setUser={setUser}/> : false}
</div>
    )
}

export default Profile
