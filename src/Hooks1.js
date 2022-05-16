import React,{useState} from 'react';

const Hooks1 = () => {
    const[value,setValue]=useState(0);
    function increValue(){
        if(value>=0){
            setValue(prev=>prev+1);
        }
    }
    function decreValue(){
        if(value>0){
            setValue(prev=>prev-1);
        }
    }
    return (
        <div>
           <h3>{value}</h3>
           <button onClick={increValue}>+</button>
           <button onClick={decreValue}>-</button> 
        </div>
    );
};

export default Hooks1;