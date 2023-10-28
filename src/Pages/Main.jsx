import React from 'react'
import NewEmplyRegd from '../Pages/NewEmply'
import Login from '../Pages/Login'
import Setting from '../Pages/Setting'
import FAQ from '../Pages/FAQ'
import Feedback from '../Pages/Feedback'
import Home from '../Pages/Home'
import Event from '../Pages/Event'
import NoticeBoard from '../Pages/NoticeBoard'
import './Main.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function Main(props) {
  return (
    <>
      <div className='mainBase'>
        <Routes>
          <Route path='/' element={<Home loginState = {props.loginStatus}/>} />
          <Route path='/event' element={<Event />} />
          <Route path='/info' element={<NoticeBoard />} />
          <Route path='/newemployeeregister' element={<NewEmplyRegd />} />
          <Route path='/login' element={<Login />} />
          <Route path='/settings' element={<Setting />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/feedback' element={<Feedback />} />
        </Routes>
      </div>
    </>

  )
}
