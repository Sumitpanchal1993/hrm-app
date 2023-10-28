import React from 'react'
import './Event.css'
import EventCard from '../Components/EventCard'
import eventData from '../Static Data/Event_data'





let img_src = "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww&w=1000&q=80"
function Event() {
  return (
    <>
      <div className='eventbase'>
        {eventData.map((item)=>{
          return(
          <EventCard key={item.id} data = {item}/>
          )
        })}

        {/* <EventCard image={img_src}/>
        <EventCard image={img_src}/>
        <EventCard image={img_src}/>
        <EventCard image={img_src}/>
        <EventCard image={img_src}/>
        <EventCard image={img_src}/>
        */}
      </div>
    </>
  )
}
export default Event