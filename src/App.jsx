import React, { useState } from 'react'
import { Counter } from './features/counter/Counter';
import './App.css';
import SideNavbar from './Components/SideNavbar'
import Main from './Pages/Main'
import TopNav from './Components/TopNav'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [login, setLogin] = useState(false)
  let login_func = () => {
    setLogin(true)
  }

    let login_func2 = () => {
    setLogin(false)
  }


  return (
    <>
      <Router>
        <TopNav loginStatus={login} func={login_func} func2={login_func2} />
        <div className='mainpg'>
          <SideNavbar loginstatus={login} />
          <Main loginStatus={login} />
        </div>
      </Router>
      {/* <Counter /> */}

    </>
  );
}

export default App;
