import React from 'react';
import './Update.scss'

function AccountUpdate({ user, setUser }) {

 function handleUpdate(user) {
  setUser(user)
    fetch(`/AccountUpdate`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: user.image,
        name: user.name,
        bio: user.bio
      }),
    })
      .then((r) => r.json())
  
  }

    function ChangeInfo(event) {
        event.preventDefault()
        const newUser = {
          image: event.target.image.value,
          name: event.target.name.value,
          bio: event.target.bio.value
        }
        handleUpdate(newUser)
    }

    return (
        <div>   
            <form onSubmit={ChangeInfo}>
                <label htmlFor="name">Name:</label>
                <input name="name" type="text" placeholder="Name" className="Info-form"/>
                <label htmlFor="image">Picture Url:</label>
                <input name="image" type="text" placeholder="Image URL" className="Info-form"/>
                <label htmlFor="bio">Bio:</label>
                <input name="bio" type="text" placeholder="Bio" className="Info-form"/>
                <button type="submit" className='button-52'>SaveChanges</button>
            </form>
        </div>
    )
}
export default AccountUpdate;