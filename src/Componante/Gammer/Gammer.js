import React, { useState } from 'react'
import './Gammer.css'
export default function Gammer() {
  let randNum = Math.round(Math.random() * 100);

  const [number, setNumber] = useState(" ")
  const [userCount, setuserCount] = useState(1)
  const [userGuessNumber, setuserGuessNumber] = useState([]);
  const [randomnumber, setrandomnumber] = useState(randNum)
  const [msg, setMsg] = useState(" ")
  const [disbaled, setdisbaled] = useState(false)

  function Namechange(event) {
    setNumber(event.target.value)
  }

  const checknumber = () => {

    if (randomnumber == number) {
      alert(`congratulations you guessed the right number in ${userCount} attempts`)
      setMsg(<p>congratulations you guessed the right number in  {userCount} attempts</p>)

      setdisbaled(true)

    } else if (randomnumber < number) {
      alert("you guessed a bigger number")
      setMsg("Select value is HIGH ")

    }
    else if (randomnumber > number) {
      alert(" you guessed a smaller number")
      setMsg("Select value is LOW ")

    }
    else if(userCount === 4) {
      // alert("GAME OVER")
      setMsg("GAME OVER")
      setdisbaled(true)

    }
     else {
      alert("WRONG NUMBER")
      setMsg("wrong number")
    }
    setuserCount(userCount + 1)
    setuserGuessNumber([...userGuessNumber, number])
  }
  const restartAgain = () => {
    setdisbaled(false)
    setMsg(" ")
    setuserGuessNumber([])
    setuserCount(0)
    setrandomnumber(Math.round(Math.random() * 100))
    setuserGuessNumber()

  }

  return (
    <div>
      <h2>Enter your Guess Lucky number</h2>
      <p>Guess a number between 1 to 100</p>
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
        <p>Random number : {randomnumber}</p>
        <p className='p1'>msg:-{msg}</p>
        <p >User Guess Number:
          {userGuessNumber?.map((item, index) => {
            return <span key={index} > {item}, </span>
          })}







        </p>
      </div>
    </div>
  )
}
