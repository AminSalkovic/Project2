import React from 'react'
import './TitleCard.css'
const TitleCard = ({title,businessUnit,date}) => {
  return (
    <div className='title-card'>

        <div className="date">
            <p>{date}</p>
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