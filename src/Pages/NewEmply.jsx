import React, { useState } from "react";
import './NewEmply.css'

export default function NewEmply() {
  const [formdata, setFormdata] = useState([])

  const submit = (e) => {
    e.preventDefault()
    let a = document.getElementsByTagName('input')
    console.table(Array.from(a))

  }


  return (
    <>
      <div className="newemply">
        <form className="newemplyform" >
          <h2>New Employee Registration Form</h2>
          <hr />
          <h3 className='tag'>Basic Details</h3>
          <div className='cover'>
            <div>
              <label>Full Name of Employee:</label>
              <input type='text' placeholder="First Name"></input>
              <input type='text' placeholder="Middle Name"></input>
              <input type='text' placeholder="Last Name" ></input>
            </div>
            <div>
              <label>Local Address:</label>
              <input type='text'></input>
            </div>
            <div>
              <label>Permanent Address</label>
              <input type='text'></input>
            </div>
            <div>
              <label>Mobile No:</label>
              <input type='number'></input>
            </div>
            <div>
              <label>Email ID:</label>
              <input type='email'></input>
            </div>
            <div>
              <label>Gender:</label>
              <span>Male</span>
              <input type='radio' name='gender'></input>
              <span>Female</span>
              <input type='radio' name='gender'></input>
              <span>Other</span>
              <input type='radio' name='gender'></input>
            </div>
            <div>
              <label>Date of Birth:</label>
              <input type='date'></input>
            </div>
          </div>
          <h3 className='tag'>Educational Qualification</h3>
          <div className='cover'>
            <label>Qualification: </label>
            <select>
              <option></option>
              <option>Doctorate</option>
              <option>Post Graduate</option>
              <option>Graduate</option>
              <option>Diploma</option>
              <option>ITI</option>
              <option>HSS 12th</option>
              <option>HS 10th</option>
            </select>
          </div>
          <h3 className='tag'>Other Informatives</h3>
          <div className='cover'>
            <div>
              <label>3  Person's Detail incase of Emergency</label>
              <input type='text'></input>
              <input type='text'></input>
              <input type='text'></input>
            </div>
          </div>


          <h3 className='tag'>Designation and Depatment Allocation</h3>
          <div className='cover'>
            <div>
              <label>Date of Joining:</label>
              <input type='date'></input>
            </div>
            <div>
              <label>Designation: </label>
              <select>
                <option></option>
                <option>Chief Executive Officer</option>
                <option>Vice President</option>
                <option>General Manager</option>
                <option>Deputy General Manager</option>
                <option>Senior Manager</option>
                <option>Deputy Manager</option>
                <option>Assitant Manager</option>
                <option>Senior Engineer</option>
                <option>Junior Engineer</option>
                <option>Trainee</option>
                <option>Worker</option>
                <option>Casual </option>
              </select>
            </div>
            <div>
              <label>Designation: </label>
              <select>
                <option></option>
                <option>Chief Executive Officer</option>
                <option>Vice President</option>
                <option>General Manager</option>
                <option>Deputy General Manager</option>
                <option>Senior Manager</option>
                <option>Deputy Manager</option>
                <option>Assitant Manager</option>
                <option>Senior Engineer</option>
                <option>Junior Engineer</option>
                <option>Trainee</option>
                <option>Worker</option>
                <option>Casual </option>
              </select>
            </div>
            <div>
              <label>Department: </label>
              <select>
                <option></option>
                <option>Management</option>
                <option>Sales & Marketing</option>
                <option>IT</option>
                <option>R&D</option>
                <option>Purchase</option>
                <option>Store</option>
                <option>Maintenance</option>
                <option>Production</option>
                <option>Inspection</option>
                <option>Human Resource (HR)</option>
                <option>Heat Treatment</option>
                <option></option>
              </select>
            </div>
            <div>
              <label>EPFO No/UAN No.:</label>
              <input type='number'></input>
            </div>
            <div>
              <label>ESIC No.:</label>
              <input type='number'></input>
            </div>
            <div>
              <label>Salary and Grade Pay </label><br />
              <label>Basic </label>
              <input type='number'></input>
              <label>Grade Pay </label>
              <input type='number'></input>
            </div>
          </div>
          <div>
            <button type='submit' onClick={submit}>Submit</button>
            <button type='reset'>Reset</button>
          </div>
        </form>
      </div>
    </>
  )
}