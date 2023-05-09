import React, { useEffect , useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = count
    },[count])
    return (
      <>
        <button onClick={() => setCount(count+1)}>add</button>
        <h1>{count}</h1>
        <button onClick={() => (count === 0) ? setCount(0) : setCount(count-1) }>
  
        Sub</button>
  
      </>
      )
}

export default UseEffect
