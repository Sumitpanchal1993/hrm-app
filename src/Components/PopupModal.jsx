import React, { useState } from 'react'

import "./PopupModal.css"
import { useAppContext } from '../Context Store/store'


function PopupModal() {
  const { setIsPopup, setIsLoggedIn } = useAppContext()
  const [errorMsg, setErrorMsg] = useState("")


  function handleLogin(event) {
    event.preventDefault()
    const username = event.target.username.value;
    const password = event.target.password.value;
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
      credentials: 'include' // Include cookies (e.g., accessToken) in the request
    })
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          console.log(data.accessToken);
          setIsLoggedIn(true)
          setIsPopup(false)
        }
        else {
          let container = document.getElementById("errorMsg")
          container.style.visibility = "visible"
          console.log(container)
          setErrorMsg(data.message)
          setTimeout(() => {
            container.style.visibility = "hidden"
          }, 3000);
        }

      });

  }


  function closePopup(event) {
    setIsPopup(false)
  }

  return (
    <>
      <div className='modal-base' onClick={closePopup}>
        <div className='modal-card' onClick={(event) => { event.stopPropagation() }}>
          <div className='modal-title'>
            <span>Login</span><span className="material-symbols-outlined" style={{ cursor: 'pointer' }} onClick={closePopup}>
              close
            </span>
          </div>
          <div className='modal-body'>
            <div className='modal-error' id='errorMsg'>
              <p>{errorMsg}</p>
            </div>
            <form action="#" className='login-form' onSubmit={handleLogin}>
              <div>
                <label htmlFor="username">Username / Employee ID</label>
                <input id="username" type="text" name='username' />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name='password' />
              </div>
              <div className='form-action'>
                <button className='primaryButton' type="submit">Login</button>
              </div>
            </form>
          </div>

          <div className='modal-footer'>

            {/* <button className="primaryButton" onClick={() => { setIsPopup(false) }}>Close</button> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default PopupModal
