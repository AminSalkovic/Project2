import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Homebar.css'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import * as HiIcons from 'react-icons/hi'



const Homebar = () => {
    const[pulseActive,setPulseActive]=useState(false)
    const[meetingActive,setMeetingActive]=useState(false)
    const[itemsActive,setItemsActive]=useState(false)
    const[actionsActive,setActionsActive]=useState(false)
    
    const passive=()=>{
        setMeetingActive(false)
        setItemsActive(false)
        setActionsActive(false)
        setPulseActive(false)
    }
    const pulse=()=>{
        passive()
        setPulseActive(!pulseActive)
    }
    const meeting=()=>{
        passive()
        setMeetingActive(!meetingActive)
    }
    const items=()=>{
        passive()
        setItemsActive(!itemsActive)
    }
    const actions=()=>{
        passive()
        setActionsActive(!actionsActive)
    }
    return (
        <div className='homebar'>
          <Link to='/'>
           <div className={pulseActive ? 'pulseActive':'pulse'}  onClick={pulse}>
                <BiIcons.BiPulse/>
                 <span>Pulse</span>
           </div>
          </Link>  
          <ul className='ul-items'>
            <Link to='/meeting' >
              <li className={meetingActive ? 'active' : 'nav-item'} onClick={meeting}>
                  <MdIcons.MdPeopleOutline/>
                   <span>Meeting</span>
              </li>
            </Link>
            <Link to='/items' >
              <li className={itemsActive ? 'active' : 'nav-item'} onClick={items}>
                  <HiIcons.HiOutlineDocumentDuplicate/>
                   <span>Items</span>
              </li>
            </Link>
            <Link to='/actions' >
              <li className={actionsActive ? 'active' : 'nav-item'} onClick={actions}>
                  <BiIcons.BiCheckCircle/>
                   <span>Actions</span>
              </li>
            </Link>
          </ul>
        </div>
  )
}

export default Homebar