import React, { useState } from "react";
import "./Login.css";

function LoginUsestate() {
    const [fromData, setFromData] = useState({
        username: " ",
        email: " ",
        password: " ",
        confirm_password: " ",
    });

    function handleInput(event){
        const name = event.target.name;
        const value = event.target.value;
        setFromData((prev) => {
            return {...prev , [name]: value}
        })

    }
  return (
    <>
    <div className="container">
      <div className="card">
        <h2 className="card-title text-center">Register</h2>
        <div className="card-body py-md-4">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="username"
                placeholder="Name"
                autoComplete="off"
                value={fromData.name}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Email"
                value={fromData.email}
                onChange={handleInput}
               
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="Password"
                value={fromData.password}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                name="confirm_password"
                placeholder="confirm-password"
                autoComplete="off"
                value={fromData.confirm_password}
                onChange={handleInput}
              />
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between">
              <button className="btn btn-primary">Create Account</button>
            </div>
          </form>
          <div>
            <p>{`My name is ${fromData.username}  and email is ${fromData.email } `}</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
// const Wrapper = styled.section`
//   
// `;


export default LoginUsestate
