import React from 'react'
import Tabs from '../Components/Tabs'
import "./PersonalInfo.css"



const dummyinfo = [
  {
    name: "Sumit Panchal",
    address: "28 Vvkeanacncliofskdjfsdkfjh"
  }

]


function PersonalInfo() {
  const tabsOptions = [
    {
      id: "personal",
      label: "Personal",
      content: <div className='pInfoBase'>
        <div>
          {dummyinfo.map((item, index) => {
            return (
              <div className='infoFields' key={index}>
                {Object.entries(item).map(([key, value]) => (
                  <div key={key}>
                    <h4>{key.charAt(0).toUpperCase() + key.slice(1)}:</h4>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            );
          })}

        </div>
        <div>
          image
        </div>
      </div>
    },
    {
      id: "official",
      label: "Official",
      content: <h2>Your oficial</h2>,
    },
  ];
  return (
    <>
      <div>
        <h2>Personal Info Dashboard</h2>
      </div>
      <Tabs option={tabsOptions} />



    </>
  )
}

export default PersonalInfo


