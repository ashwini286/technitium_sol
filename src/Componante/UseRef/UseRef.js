import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null)
    const PickFile = () => {
        inputRef.current.click()
    }
  return (
    <div>
    <input  
    type='file'
    ref={inputRef}
    style={{ display: 'none' }}


    />
    <button onClick={PickFile} style={{
        backgroundColor: "#1e293b",
        color: "white",
        margin : 20,
        padding: 20,
        borderRadius: 8,
        cursor: "pointer",
        overflow: "hidden"}}>Pick the File</button>
      
    </div>
  )
}

export default UseRef
