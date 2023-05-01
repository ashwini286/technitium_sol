import React from 'react'

export default function List() {
    const items = [1,2,3,4,5,6,7]
    const listitem = items.map((item , index) => <li>{item} index number is {index}</li>)
  return (
    <div> <ol>{listitem}</ol> </div>
   
  )
}
