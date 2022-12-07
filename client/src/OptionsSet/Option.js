import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import OptionCard from './OptionCard';
import OptionAddForm from './OptionAddForm';

function Option() {
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
        fetch('/options')
            .then(res => res.json())
            .then(data => setOptions(data))
    }, [])

    function handleDelete(id){
        const updatedObj = options.filter(option => option.id !== id)
        setOptions(updatedObj)
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
        <div className='Option'>
            <NavBar />
            <div className='Card'>
           {card}
           <OptionAddForm addOn={handleAdd}/>
           </div>
        </div>
    )
}
export default Option