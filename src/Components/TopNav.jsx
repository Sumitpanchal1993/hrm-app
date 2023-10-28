import React from 'react'
import './TopNav.css'
import { Link } from 'react-router-dom'

export default function TopNav(props) {


  return (
    <>
      <header>
        <div>
          <h2>COMPANY LOGO</h2>
        </div>

        {!props.loginStatus ?
          <Link to='/login'><button onClick={() => { props.func() }}>Login</button></Link> :
          <div></div>
        }

        {props.loginStatus &&
          <div className='headerLHS'>
            <span className="material-symbols-outlined"><span className="material-symbols-outlined">notifications</span></span>
            <h3>Hi! UserName</h3>
            <span className="material-symbols-outlined">account_circle</span>
            <Link to='/'><button onClick={() => { props.func2() }}>Log Out</button></Link>

          </div>
        }

      </header>
    </>
  )
}