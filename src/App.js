import React, {useState} from 'react';
import {Message} from './message.js' 
import './App.css';

export default function App(){
  let [count, setCount] = useState(1)
  let [isDay, setDay] = useState(false)

  return (
    <div className={`box ${isDay ? 'daylight' : ''}`}>
      <h1 className='name1'>Assignment #4 : Syed Sheraz Ali</h1>
      <h1>Good  {isDay ? "Morning" : "Night"}</h1>
      <Message counter={count}/>
         
         <br/>
         <div className='mrg'>
           
         <button className='btn' onClick={()=> setCount(++count)
        }> 
        Increment counter
        </button>
        <button className='btn' onClick={()=> setCount(--count)
        }> 
        Decerement counter
        </button>
        <button className='btn' onClick={()=> setCount(0)
        }> 
        Refresh counter
        </button>


        <button className='btn' onClick={()=>setDay(!isDay)}>Update Day</button>
        

         </div>
         
    </div>
  );
}
