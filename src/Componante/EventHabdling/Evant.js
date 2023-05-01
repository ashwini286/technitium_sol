import React, { useState } from 'react'
import './Event.css'
const Evant = () => {
    const purple = "8e44ad"
    const [bg , setBg] = useState(purple);
    const [name,setName] = useState('Click Me');
   

    const bgChange = () => {
      let newBg = '#34495e';
      setBg(newBg);
      setName("Ouch!!")
      
    };
    const bgBack = () => {
        setBg(purple)
        setName("Ayyo!! :smile ")

    }
  return (
    <>
    <div style={{backgroundColor : bg }}>
      <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
    </div>
    </>
  )
}
export default Evant