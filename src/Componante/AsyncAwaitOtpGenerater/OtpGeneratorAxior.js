import axios from 'axios'
import React, { useState } from 'react'

function OtpGeneratorAxior() {
  const [mobileNumber, setMobileNumber] = useState('')
      const [error, setError] = useState('')
      const [otpsent, setotpsent] = useState(false)

      const apiUrl = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';
      const handleChange = (e) => {
        setMobileNumber(e.target.value)
      }

      const handleSubmit = (e) => {
        e.preventDefault();
      }

      const sendOtp = async () => {
        const validMobile = /^[6-9]\d{9}$/.test(mobileNumber);

        if (validMobile) {
          try {
            const response = await axios.post(apiUrl, { mobile: parseInt(mobileNumber) })
            if (response.status === 200) {
              setMobileNumber('');
              setError('');
              setotpsent(true)
            }
          }

          catch (error) {
            setError('Unable to generate OTP');
            console.log(error.message);
          }
        }

        else {
          setError('Please enter a valid 10 digits Indian Mobile Number');
        }
      };

      return (
        <div>
          <p>Enter your Mobile Number</p>
          <form onSubmit={handleSubmit}>
            <input
              type='number'
              placeholder='Enter your Mobile Number'
              value={mobileNumber}
              onChange={handleChange}
            />
            <button type="submit" onClick={sendOtp} >Get OTP</button>
          </form>
          {error && <p >{error}</p>}
          {otpsent && <p >OTP sent successfully</p>}
        </div>
      )
    }
  
  

    
  


export default OtpGeneratorAxior
