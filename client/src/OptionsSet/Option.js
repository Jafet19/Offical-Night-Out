import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import OptionCard from './OptionCard';
import OptionAddForm from './OptionAddForm';

function Option() {
    const [options, setOptions] = useState([]);
    console.log(options)
    
    useEffect(() => {
        fetch('/options')
            .then(res => res.json())
            .then(data => setOptions(data))
    }, [])

    function handleDelete(id){
        const updatedObj = options.filter(option => option.id !== id)
        // debugger
        setOptions(updatedObj)
        console.log('should delete')
    }
    
    function handleAdd(newOption){
        const updateOption = [...options,newOption]
        setOptions(updateOption)
      }

    const card = options.map((option) => (
        <OptionCard 
        key={option.id} 
        option={option}
        setOptions={setOptions}
        onDelete={handleDelete}
        />
      ))
    return (
        <div className='strip'>
            <NavBar />
           {card}
           <OptionAddForm addOn={handleAdd}/>
        </div>
    )
}
export default Option