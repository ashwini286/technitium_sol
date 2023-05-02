import React, { useEffect, useState } from 'react'

const Asyawait = () => {
const [data,setdata] = useState('')
useEffect( () => {

  async function ChangeDog(){

    try{
      const response = await fetch("https://dog.ceo/api/breeds/image/random")
      const fatchdata = await response.json()
      setdata(fatchdata.message)
    } catch (error) {
      console.log(error)
    }



  }
  ChangeDog()

},[])



  return (
    <div >
      <img
      src={data}
    alt='load image'
    style={{height: "400px"}}
      />
    </div>
  )
}

export default Asyawait
