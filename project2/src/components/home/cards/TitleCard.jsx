import React from 'react'
import './TitleCard.css'

const TitleCard = ({title,businessUnit}) => {
  return (
    <div className='title-card'>
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