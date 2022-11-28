import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar"

function AccountUpdate({ user, setUser }) {

    function update(user){
        setUser(user)
        fetch('/AccountUpdate',{
          method: "PATCH",
          body: JSON.stringify({
            username: user.username,
            image: user.image,
            name: user.name,
            bio: user.bio
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
    }

    function ChangeInfo(event) {
        event.preventDefault()
        user.image = event.target.image.value 
        user.name = event.target.name.value
        user.bio = event.target.bio.value
        update(user)           
    }
    return (
        <div>   
            <NavBar/>
            <form className="Info-form" onSubmit={ChangeInfo}>
                <label htmlFor="name">Name:</label>
                <input name="name" type="text" placeholder="Name"/>
                <label htmlFor="image">Picture Url:</label>
                <input name="image" type="text" placeholder="Image URL"/>
                <label htmlFor="bio">Bio:</label>
                <input name="bio" type="text" placeholder="Bio"/>
                <button type="submit">Update Changes</button>
                 {/* delete when finished with css, making this as a pop form <Profile.js/> */}
                <NavLink to='/Profile'>
                <button>Done</button>
                </NavLink>
                {/*  ^^^  */}
            </form>
        </div>
    )
}
export default AccountUpdate;