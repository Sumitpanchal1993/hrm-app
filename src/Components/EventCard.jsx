import React from 'react'
import './EventCard.css'

// let img_src = "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww&w=1000&q=80"

function EventCard(props){
  console.log(props)
return(
  <>
    <div className='event_card_base'>     
        <div className='eventCard'>
          <div className='card_img_blur'>
            <img src={props.data.image} alt='image' />
          </div>
          <div className='card'>
            <div className='card_img'>
              <img src={props.data.image} alt='image' />
            </div>
            <div className='detail'>
              <div className='date'>
                <h1>{props.data.day}</h1>
                <h1>{props.data.month}</h1>
                <h1>{props.data.year}</h1>
              </div>
              <div>
                <div><h3>{props.data.eventName}</h3></div>
                <div className='event_time'>
                  {/* <div>
                    <span>STARTED:</span>
                    <span>01 January 2023</span>
                  </div> */}
                  <div>
                    <span>End Date : </span>
                    <span>{props.data.endDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  </>
)
  
}

export default EventCard