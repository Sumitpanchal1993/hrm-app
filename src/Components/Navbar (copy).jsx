import React from 'react'
import { useState } from 'react'


const demo = [
  {
    country: 'India',
    states: [{
      name: 'MP',
      cities: ['Dewas', 'Indore', 'Ujjain']
    },
    {
      name: 'RJ',
      cities: ['Jaipur', 'Ajmer', 'Nimbaheda']
    },
    {
      name: 'RJ',
      cities: ['Jaipur', 'Ajmer', 'Nimbaheda']
    },
    {
      name: 'MH',
      cities: ['Pune', 'Mumbai', 'Nasik']
    }
    ]
  },
  {
    country: 'Pak',
    states: [{
      name: 'Krachi',
      cities: ['Suleman', 'istudore', 'fdfffjain']
    },
    {
      name: 'Abdul',
      cities: ['Jdfdpur', 'Ajmdfsdf', 'Nsdfsdfda']
    },
    {
      name: 'lahore',
      cities: ['fsdjkfhur', 'Kuhu', 'nilu']
    },
    {
      name: 'Ahmed',
      cities: ['Pashim', 'uttar', 'nijdkl']
    }
    ]
  },
]
// console.log(demo)

demo.map((items) => {

  console.log(items)
  console.log(items.country)
})



function Navbar() {
  const [countries, setCountries] = useState('');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const data = ['India', 'Pak', 'USA']
  // console.log(countries)
  // console.log(states)
  // console.log(cities)

  function countryChange(e) {
    setCountries(e.target.value)
    setStates(demo.find(item => item.name === e.target.value).states)
  }

  return (
    <>
      <nav>
        <div>Logo</div>
        <div>
          <ul>
            <li>List</li>
          </ul>
        </div>
      </nav>
      <div>
        <label>Country</label>
        <select onChange={countryChange}>
          <option>{countries}</option>
          {demo.map((item, index) => {
            return <option key={index} value={item.country}>{item.country}</option>
          })}
        </select>
      </div>
      <div>
        <label>State</label>
        <select>
          {states.map((stat, index) => {
            return <option key={index}>{stat.name}</option>
          })}
        </select>
      </div>
      <div>
        <label>City</label>
        <select>
          {data.map((item, index) => {
            return <option key={index}>{item}</option>
          })}
        </select>
      </div>
    </>
  )
}

// export default Navbar