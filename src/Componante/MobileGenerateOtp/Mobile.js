import React, { useState } from 'react'
// import MojoAuth from "mojoauth-web-sdk"
import './Mobile.css'

const Mobile = () => {

    const Clickbtn = () => {
        // const [payload, setPayload] = React.useState(null)
        const getuser = () => {
          const url = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP'
           const option = {
            method: 'POST',
            headers : {
              'Content-Type': 'application/json',

            },
            body: JSON.stringify({Mobile: 8210395575}),

           }

           fetch(url, option)
           .then((response) => response.json())
           .then((data) => console.log({data}))
           .catch((error) => console.log(error))

        }

        getuser()
    }

     
  return (
    <div>
      

      
      <button onClick={Clickbtn} className='btn'>GenerateOtp</button>
    </div>
  )
}

export default Mobile
