import React from 'react';
import './Option.scss'

function OptionCard({ option, onDelete }) {
    const {id, name, location, url} = option

    function handleDelete(){
        fetch(`/options/${id}`,{
            method: 'DELETE',
    })
       .then((r) => {
        if (r.ok){
            onDelete(id)
        }
       })
    }
    return (
      <div className='container-2'>
<h2>{name}</h2>
<p>{location}  , {url}</p>
<h2 onClick={handleDelete}>🗑️ </h2>
</div> 
    )
}
export default OptionCard;
