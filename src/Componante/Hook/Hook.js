import React from 'react'

function Hook() {
    const [count, setCount] = React.useState(0)
  return (
    <>
      <button onClick={() => setCount(count+1)}>add</button>
      <h1>{count}</h1>
      <button onClick={() => (count === 0) ? setCount(0) : setCount(count-1) }>

      Sub</button>

    </>
  )
}

export default Hook
