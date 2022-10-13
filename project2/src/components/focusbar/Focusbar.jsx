import React,{useState} from 'react'
import * as BiIcons  from 'react-icons/bi'
import Dropdown from './Dropdown'
import './Focusbar.css'
const Navbar = () => {
  const[showDropdown,setShowDropdown]=useState(false)
  
  const handleIcon=()=>{
      setShowDropdown(!showDropdown)
  }
  return (
    <div className='focusbar'>
          <h1>FOCUS</h1>
          <div className="icon">
              <BiIcons.BiBell className={showDropdown?'bellActive':'bell'} onClick={handleIcon}/>
              <div className={showDropdown?'none':'notifications'} onClick={handleIcon}>
                <p>2</p>
              </div>
          </div>
          
          {showDropdown && <Dropdown
           handle={setShowDropdown}          
          />}
    </div>
  )
}

export default Navbar