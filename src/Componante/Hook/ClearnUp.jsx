import React, { useEffect, useState } from 'react'

function ClearnUp() {
    const [widthCount, setWidthCount] = useState(window.screen.width)
    function currentScreenWidth(){
        setWidthCount(() => window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', currentScreenWidth)
        return () => {
            window.removeEventListener("resize", currentScreenWidth)
        }
    });
  return (
    <div>
      <h3>the size of the window is <span>{widthCount}</span></h3>
    </div>
  )
}

export default ClearnUp
