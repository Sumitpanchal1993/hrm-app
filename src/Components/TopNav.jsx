import React from 'react'
import './TopNav.css'
import { Link } from 'react-router-dom'
import { useAppContext } from '../Context Store/store'
import PopupModal from './PopupModal';


export default function TopNav(props) {
  const { isMobile, isPopup, setIsPopup,  isLoggedIn } = useAppContext();

  return (
    <>
      {isPopup && <PopupModal />}
      <nav className='topNav'>
        <div className='nav-logo'>
          <h2>LOGO </h2>
        </div>

        {!isLoggedIn ?
          <Link to=""><button className='primaryButton' onClick={() => { setIsPopup(true) }}>Login</button></Link> : ""
        }
        { isLoggedIn &&
          <div className='top-nav-user'>
            <span className="material-symbols-outlined"><span className="material-symbols-outlined">notifications</span></span>
            <h3>Hi! User</h3>
            <span className="material-symbols-outlined">account_circle</span>
            <Link to='/'><button className='primaryButton' onClick={() => { props.func2() }}>Log Out</button></Link>
          </div>
        }
      </nav>
    </>
  )
}