import React from 'react'
import { Link } from 'react-router-dom'
import './SideNavbar.css'
import menuList from '../Static Data/SideNav_Menu'

const arrow = () => {
  // document.getElementById('arrow').innerHTML = 'arrow_back_ios'
  // setTimeout(()=>{
  //   document.getElementById('arrow').innerHTML = 'arrow_forward_ios'}, 5000)
  document.getElementById('arrow').style.transform = 'rotate(180deg)'

  setTimeout(() => { document.getElementById('arrow').style.transform = 'rotate(360deg)' }, 1000)

  // let g = document.querySelectorAll('p')
  //   console.log(g)
  //   for (let i = 0 ; i<g.length;i++){
  //     console.log(g[i].style.display='none')
  //   }


}
export default function SideNavbar() {


  return (
    <>
      <nav>
        <div id='logo'>
          <Link to='/'>HRM APP</Link>
        </div>
        <hr />
        <div className='open_close' onClick={arrow} id='arrow'>
          <span className="material-symbols-outlined" >arrow_forward_ios</span>
        </div>
        <div className='open_close hide'>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div>
          {menuList.map((item, index) => {
            return (
              <div className='menuopt' key={index} >
                <Link to={item.link}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <p>{item.title}</p>
                </Link>
              </div>
            )
          })}

        </div>

      </nav>
    </>


  )
}