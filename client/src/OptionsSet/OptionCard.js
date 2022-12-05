import React from 'react';
import './Option.scss'

function OptionCard({ option, setOptions , onDelete }) {
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
            <h2>{name}<button onClick={handleDelete}>🗑️ </button></h2>
            <p>{location}  , {url}</p>
        </div>
    )
}
export default OptionCard;