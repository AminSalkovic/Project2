import React, { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import './Home.css'
import Sidebar from './Sidebar'

const Home = () => {
  const[showSidebar,setShowSidebar]=useState(false)
  const handleSidebar=()=>{
      setShowSidebar(!showSidebar)
  }
  return (
    <div className='home'>
      <div className="openIcon">
       <AiIcons.AiOutlineDoubleLeft onClick={handleSidebar}/>
      </div>
      {showSidebar && <Sidebar
        closebutton={setShowSidebar}
      />}
    </div>
  )
}

export default Home