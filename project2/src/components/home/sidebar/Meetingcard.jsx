import React from 'react'
import './Meetingcard.css'
const Meetingcard = ({name,date,status}) => {
  
  return (
    <div className='meetingcard'>
        <div className="meetingname">
               <div className="meetingname-div">
                <div className="point"></div>
                <h1>{name}</h1>
               </div>
              <p>{date}</p>
        </div>
        <div className="urgent">
              <p>{status}</p>
        </div>
    </div>
  )
}

export default Meetingcard