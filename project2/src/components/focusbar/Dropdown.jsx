import React from 'react'
import './Dropdown.css'
const Dropdown = ({handle}) => {
  return (
    <div className='dropdown'>
         <div className="notification1" onClick={()=>handle((previous)=>!previous)}>Notification1</div>
         <div className="notification2" onClick={()=>handle((previuos)=>!previuos)}>Notification2</div>
    </div>
  )
}

export default Dropdown