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


    />
    <button onClick={PickFile}>Pick the File</button>
      
    </div>
  )
}

export default UseRef
