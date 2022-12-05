import React, { useState } from 'react';

function OptionAddForm({ addOn }){
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [url, setUrl] = useState('')  
    const [categoryId, setCategoryId] = useState(1)


 function handleSubmit(e){
  e.preventDefault()
     fetch('/options',{
             method: 'POST',
             headers: {  
               'Content-Type': 'application/json'},
             body: JSON.stringify({
                 name: name,
                 location: location,
                 url: url,
                 category_id: categoryId
             }),
           })
             .then(res=>res.json())
             .then((data)=> addOn(data))
         }


    return(
        <div className="strips">
                <h1>Add Option</h1>
             <form onSubmit={handleSubmit}>      
                <input name="name" type="text" className="feedback-input" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>   
                <input name="text" type="text" className="feedback-input" placeholder="Location" value={location} onChange={(e)=> setLocation(e.target.value)} />
                <input name="text" type="text" className="feedback-input" placeholder="Place's Url"  value={url} onChange={(e)=> setUrl(e.target.value)}/>
                <input name="text" type="text" className="feedback-input" placeholder="ID"  value={categoryId} onChange={(e)=> setCategoryId(e.target.value)}/>
                <input type="submit" value="Submit"/>
              </form>
              </div>
    )
}
export default OptionAddForm