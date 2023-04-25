import React from 'react'
import './Data.css'
export default function Data({image, designation, name, jobDescripton}) {
    function Namealart(){
        alert(name)
    }
  return (
    <div className = 'card'>
      <img src = {image} alt='xyz'className='img' /> 
      <p >{designation}</p>
      <h2 >{name}</h2>
      <p >{jobDescripton}</p>
      <button className = 'btn' onClick={Namealart}>See more</button>
    </div>
  )
}
