import './Home.css'
import { useAppContext } from "../Context Store/store"

let src = 'https://cdn.mastersunion.org/assets/imgV2/hr-management-hero-image.png'
export default function Home(props) {
  const { setIsPopup } = useAppContext()

  return (
    <>
      <div className='homeBase'>
        <div><img src={src} alt="logo"></img></div>
        <h1>Welcome to the HRM Application</h1>
        <h3>One Solution for all your Humam Resources Management Problems </h3>
        <h3>The Application gives you the completeness of your record keeping at one window</h3>
        <h3><span className="login-link" onClick={() => { setIsPopup(true) }} >Login</span> To Enjoy the full features of the application</h3>

      </div>
    </>
  )
}