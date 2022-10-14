import React from 'react'
import './Userscard.css'
const Userscard = ({image,status,delay}) => {
  return (
    <div className='userscard'>
         <div className="image">
             
        </div>
        <div className="delay">
            <button>{delay}</button>
        </div>
        <div className="status">
             <button>{status}</button>
        </div>
      
    </div>
  )
}

export default Userscard