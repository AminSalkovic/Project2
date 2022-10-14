import React from 'react'
import './Taskcard.css'
const Taskcard = ({title,subtitle,progress}) => {
  return (
    <div className='taskcard'>
     <div className="taskcard-part1">
         <div className="image">
             </div>
             <div className="title">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
             </div>
     </div>
           <div className="taskcard-part2">
                <div className="progres">
                    <p>{progress}</p>
                </div>
           </div>
    </div>
  )
}

export default Taskcard