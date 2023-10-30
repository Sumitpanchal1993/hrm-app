import React from "react"
import './FAQ.css'
import faq_data from "../Static Data/FAQ_data"

export default function FAQ() {
  return (
    <>
      <div className='FAQ_base'>
        <div className='title'>
          <h1>Thanks for Visiting the Helpdesk</h1>
          <h2>FAQ</h2>
        </div>
        <div className='faq_srch'>
          <span><input type='text' /><button>Search</button> </span>
        </div>
        <hr />


        {faq_data.map((item) => {
          return (
            <div className='QA'>
              <h3>{item.que}</h3>
              <p>{item.ans}</p>
            </div>
          )
        })}
        <div>
        </div>
      </div>
    </>
  )
}