import React, { useState } from 'react'
import './Gammer.css'
export default function Gammer() {
  let randNum = Math.round(Math.random() * 10);

  const [number, setNumber] = useState("")
  const [userCount, setuserCount] = useState(0)
  const [userGuessNumber, setuserGuessNumber] = useState([]);
  const [randomnumber, setrandomnumber] = useState(randNum)
  const [msg, setMsg] = useState(" ")
  const [disbaled, setdisbaled] = useState(false)

  function Namechange(event) {
    setNumber(event.target.value)
  }

  const checknumber = () => {

    if (randomnumber == number) {
      setMsg("Congratulations!!!! you are win")
      setdisbaled(true)

    } else if (randomnumber < number) {
      setMsg("Select value is HIGH ")

    }
    else if (randomnumber > number) {
      setMsg("Select value is LOW ")

    }
    else if (userCount == 4) {
      setMsg("GAME OVER")
      setdisbaled(true)

    } else {
      setMsg("wrong msg")
    }
    setuserCount(userCount + 1)
    setuserGuessNumber([...userGuessNumber, number])
  }
  const restartAgain = () => {
    setdisbaled(false)
    setMsg(" ")
    setuserGuessNumber([])
    setuserCount(0)
    setrandomnumber(Math.round(Math.random() * 10))
    setuserGuessNumber()

  }

  return (
    <div>
      <h2>Enter your Guess Lucky number</h2>
      <p>Guess a number between 1 to 10</p>
      <p>You Have 5 round</p>

      <input
        value={number}
        type='number'
        className='inputTag'
        placeholder='Guess Lucky Number'
        onChange={Namechange}
        disabled={disbaled}
      />
      <button type='submit' className='btn' onClick={checknumber} disabled={disbaled}>Match Number</button>
      {disbaled &&
        <button onClick={restartAgain} className='btn'>Start Again</button>
      }


      <div>
        <p>Total round by user : {userCount}</p>
        {/* <p>Random number : {randomnumber}</p> */}
        <p>msg: {msg}</p>
        <p>User Guess :
          {userGuessNumber?.map((item, index) => {
            return <span key={index} > {item}, </span>
          })}







        </p>
      </div>
    </div>
  )
}
