import React from 'react'
import './EventCard.css'

let img_src = "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww&w=1000&q=80"

function EventCard(){
return(
  <>
    <div className='event_card_base'>     
        <div className='eventCard'>
          <div className='card_img_blur'>
            <img src={img_src} alt='image' />
          </div>
          <div className='card'>
            <div className='card_img'>
              <img src={img_src} alt='image' />
            </div>
            <div className='detail'>
              <div className='date'>
                <h1>26</h1>
                <h1>Jan</h1>
              </div>
              <div>
                <div><h3>Cricket Match at the Company Day Celebration</h3></div>
                <div className='event_time'>
                  <div>
                    <span>STARTED:</span>
                    <span>01 January 2023</span>
                  </div>
                  <div>
                    <span>ENDED:</span>
                    <span>20 January 2023</span>
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