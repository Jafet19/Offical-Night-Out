import React from 'react';

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
            <form className="Info-form" onSubmit={ChangeInfo}>
                <label htmlFor="name">Name:</label>
                <input name="name" type="text" placeholder="Name"/>
                <label htmlFor="image">Picture Url:</label>
                <input name="image" type="text" placeholder="Image URL"/>
                <label htmlFor="bio">Bio:</label>
                <input name="bio" type="text" placeholder="Bio"/>
                <button type="submit">SaveChanges</button>
            </form>
        </div>
    )
}
export default AccountUpdate;