import React from 'react'
import Tabs from '../Components/Tabs'
import "./PersonalInfo.css"



const dummyinfo = [
  {
    name: "Sumit Panchal",
    address: "28 Vivekanand Colony Motui Bunglaw Dewas MP",
    contact: 8349102532,

  }

]

const officialInfo  =[ {
    Designation: "Senior Associate Consultant",
    Job_level: "JL5",
    Department: "Design & Development",
    Reporting: "Jaypal",
    subordinate: "Sumit, Manoj, Sujeet",
    email:"dummy@orgin.com",
}]

function PersonalInfo() {
  const tabsOptions = [
    {
      id: "personal",
      label: "Personal",
      content: <div className='pInfoBase'>
       
          {dummyinfo.map((item, index) => {
            return (
              <div className='infoFields' key={index}>
                {Object.entries(item).map(([key, value]) => (
                  <div className='oneField' key={key}>
                    <h4>{key.charAt(0).toUpperCase() + key.slice(1)}:</h4>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            );
          })}
        <div className='infoAvtar'>
          image
        </div>
      </div>
    },
    {
      id: "official",
      label: "Official",
      content: <div className='pInfoBase'>
       
          {officialInfo.map((item, index) => {
            return (
              <div className='infoFields' key={index}>
                {Object.entries(item).map(([key, value]) => (
                  <div className='oneField' key={key}>
                    <h4>{key.charAt(0).toUpperCase() + key.slice(1)}:</h4>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            );
          })}
        <div className='infoAvtar'>
          image
        </div>
      </div>,
    },
  ];
  return (
    <>
      <div >
        <h2>Personal Info Dashboard</h2>
      </div>
      <Tabs option={tabsOptions} />



    </>
  )
}

export default PersonalInfo


