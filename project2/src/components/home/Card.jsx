import React from 'react'
import './Card.css'
const Card = ({title,number,icon,id}) => {
  return (
    <div className='card'>
         <div className="section1">
             <div className={id}>
                <span>{icon}</span>
             </div>
             <p>{number}</p>
         </div>
         <div className="section2">
             <p>{title}</p>
         </div>
    </div>
  )
}

export default Card