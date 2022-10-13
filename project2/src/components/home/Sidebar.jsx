import React,{useState}from 'react'
import * as AiIcons from 'react-icons/ai'
import './Sidebar.css'

const Sidebar = ({closebutton}) => {

    return (
        <div className='sidebar'>
             <AiIcons.AiOutlineClose onClick={()=>closebutton((previous)=>false)} />
        </div>
  )
}

export default Sidebar