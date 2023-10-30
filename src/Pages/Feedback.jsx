import React from "react"
import './Feedback.css'


const deptt = ['Administration', 'ISO Cell', 'Sales', 'Marketting',  ]

export default function Feedback() {
  return (
    <>
      <div className="feedback_base">

        <div className="title">
          <h1>We Value your Feedback</h1>
          <h2>Your feedback is the fuel for the new improvemnt in the system</h2>
        </div>
        <hr/>
        <form className="feedbackform">
          <div>
            <label htmlFor="name">Name :</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="empno">Employment Number</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="name">Suggestion for Department</label>
            <select name="" id="">
              <option value=""></option>
              <option value="">HR</option>
              <option value="">R&D</option>
              <option value="">Sales</option>
              <option value="">Purchase</option>
            </select>
          </div>
          <div>
            <label htmlFor="name">Category</label>
            <select name="" id="">
              <option value=""></option>
              <option value="">HR</option>
              <option value="">R&D</option>
              <option value="">Sales</option>
              <option value="">Purchase</option>
            </select>
          </div>
          <div>
            <label htmlFor="detail">Detail of Suggestions</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="feedback_submit">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </>
  )
}