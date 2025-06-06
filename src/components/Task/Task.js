
import { isVisible } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import { PencilFill, PersonFill, TrashFill } from 'react-bootstrap-icons';
import'./Task.css';
 export default function Task({name}){
    const [isVisible,setIsVisible] = useState(true);
    const [count,setCount] = useState(1);


    const taskRemove = ()=>{
        setIsVisible(false);
        console.log("удаление")
    }
    function taskEdit(){
       
        console.log("редактирование")
        setCount(count+1);

    }
    
    return(
        <div className = {isVisible? "task": "hide"}>
        <span>{name}</span>
        <PersonFill className='btn-edit' onClick={taskEdit}/>
        <TrashFill className = 'btn-remove' onClick={taskRemove}/>
        {count}
       
        </div>
    );
}
