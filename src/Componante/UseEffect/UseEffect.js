import React from 'react'
import './UseEffect.css'
const UseEffect = () => {
    const FocueTheInput = () =>{
        const pickFile = document.getElementById('inputField');
      pickFile.click()


    }
  return (
    <div>
      <input
      type = "file"
      id = "inputField"

      />
      <button onClick={FocueTheInput}>Pick the File</button>
    </div>
  )
}

export default UseEffect
