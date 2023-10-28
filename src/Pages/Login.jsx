import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './Login.css'


function AdminLogin() {
  return (
    <>
      <div className="flex">
        <div className="base ">
          <h2 className='txtcen'>Administrative Login</h2>
          <hr />
          <div className='loginform'>
            <form>
              <div>
                <label>Employee ID:</label>
                <input type='text' placeholder='Enter Your Employee ID'></input>
              </div>
              <div>
                <label>Password</label>
                <input type='password' placeholder='Enter Your Password'></input>
              </div>
            </form>
          </div>
          <div className='txtcen'>
            <button>Login</button>
          </div>
          <div className='txtcen'>
            <p>forgot Login Details:</p>
            <Link to="/">Click here</Link><span> to recover</span>
          </div>
        </div>
      </div>
    </>
  )
}
function EmpLogin() {
  return (
    <>
      <div className="base ">
        <h2 className='txtcen'>Employees Login</h2>
        <hr />
        <div className='loginform'>
          <form>
            <div>
              <label>Employee ID:</label>
              <input type='text' placeholder='Enter Your Employee ID'></input>
            </div>
            <div>
              <label>Password</label>
              <input type='password' placeholder='Enter Your Password'></input>
            </div>
          </form>
        </div>
        <div className='txtcen'>
          <button>Login</button>
        </div>
        <div className='txtcen'>
          <p>forgot Login Details:</p>
          <Link to="/">Click here</Link><span> to recover</span>
        </div>
      </div>
    </>
  )
}

export default function Login() {
  const [adminLogin, setAdminLogin] = useState(false)
  const [empLogin, setEmpLogin] = useState(false)

  if (adminLogin) {
    return (
      <>
        <AdminLogin />
      </>
    )
  }
  else if (empLogin) {
    return (
      <>
        <EmpLogin />
      </>
    )
  }
  else {
    return (
      <>
        <div className="base ">
          <h2 className='txtcen'>Login Page</h2>
          <hr />
          <p>Select the Login Type</p>
          <ul>
            <li>Admin Login is Only for HOD HR , CEO , CMD and VP </li>
            <li>Employee Login is for all employees. </li>
          </ul>
          <div className='txtcen'>
            <button onClick={() => { setAdminLogin(true) }}>Admin Login</button>
            <button onClick={() => { setEmpLogin(true) }}>Employee Login</button>
          </div>
        </div>
      </>
    )
  }

}
