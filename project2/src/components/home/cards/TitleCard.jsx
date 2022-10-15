import React from 'react'
import './TitleCard.css'
const TitleCard = ({title,businessUnit,date,month}) => {

  return (
    <div className='title-card'>
        <div className="date">
            <div className="calendar-color"></div>
            <div className="calendar-date">
                <h1>{month}</h1>
                <p>{date}</p>
            </div>
        </div>
        <div className="title">
             <h1>{title}</h1>
        </div>
        <div className="businessUnit">
            <h1>{businessUnit}</h1>
        </div>
        
     
    </div>
  )
}

export default TitleCard