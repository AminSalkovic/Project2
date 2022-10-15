import React,{useState}from 'react'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import Calendar from '../../alldata/Calendar'
import Meetingcard from './Meetingcard'
import './Sidebar.css'

const Sidebar = ({closebutton}) => {

    return (
        <div className='sidebar'>
             <div className="x">
               <p>Calendar</p>
             <AiIcons.AiOutlineClose className='x-icon' onClick={()=>closebutton((previous)=>false)} />
             </div>
             <div className="meeting">
                  {Calendar.map((el,index)=>{
                    return <Meetingcard key={index}
                    name={el.name}
                    date={el.date}
                    status={el.status}
                    />
                  })}
                  <p className='meeting-p'>+ Add New Item</p>
                  <div className="add-item">
                  <form>
                     <p>Meeting Name</p>
                    <input type="text" />
                    <p>Date</p>
                    <BsIcons.BsCalendar2 className='calendar-icon'/>
                    <input type="text" />
                  </form>
                  </div>
             </div>
        </div>
  )
}

export default Sidebar