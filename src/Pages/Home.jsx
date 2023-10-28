import React, {useState} from "react"
import './Home.css'
import {Link} from 'react-router-dom'

let src = 'https://cdn.mastersunion.org/assets/imgV2/hr-management-hero-image.png'
export default function Home(props) {
const [login, setLogin] = useState(false)
  
  return (
    <>
      <div className='homeBase'>
        <div><img src={src}></img></div>
        <h1>Welcome to the HRM Application</h1>
        <div>
          <h3>One Solution for all your Humam Resources Management Problems </h3>
        </div>
        <div>
          <h3>The Application gives you the completeness of your record keeping at one window</h3>
        </div>
        {!props.loginState &&          
        <div>
          <h3><Link to='/login' >Login</Link> To Enjoy the full features of the application</h3>
        </div>
        }
      </div>
    </>
  )
}