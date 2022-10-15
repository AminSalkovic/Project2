import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import Card from './Card'
import './Home.css'
import Sidebar from './sidebar/Sidebar'
import CardItems from './CardItems'
import ItemsList from '../alldata/ItemsLists'
import Tasks from '../alldata/Tasks'
import TitleCard from './cards/TitleCard'
import Userscard from './cards/Userscard'
import Taskcard from './cards/Taskcard'
import Actions from '../alldata/Actinos'

const Home = () => {
  const[showSidebar,setShowSidebar]=useState(false)
  const handleSidebar=()=>{
      setShowSidebar(!showSidebar)
  }
  return (

    <div className='home'>
        <div className="part1">
         <h1 className='h1-task'>Waiting your Action </h1>
            <div className="openIcon">
            <AiIcons.AiOutlineDoubleLeft onClick={handleSidebar}/>
            </div>
      </div>
      <div className="part2">
            <div className="card-rows">
                {CardItems.map((item,index)=>{
                  return <Card key={index} 
                    id={item.id}
                    number={item.number}
                    title={item.title}
                    icon={item.icon}
                    />
                })}
              </div> 
         <button className={showSidebar?'quick-item-active':'quick-item'}>+ Quick Item</button>  
      </div>


      <div className={showSidebar?'width-small':'width-long'}>
        <div className="part3-bar">
             <div className="first-part">
            
             </div>
             <div className="second-part"></div>
        </div>
      </div>

      <div className={showSidebar?'width-small':'width-long'}>
        <div className="part4-bar">
             <div className="first-part">
                {ItemsList.map((el,index)=>{
                  return <TitleCard key={index}
                    title={el.title}
                    businessUnit={el.businessUnit}
                    date={el.date}
                    month={el.month}
                  />
                })}
             </div>
             <div className="second-part">
                {ItemsList.map((el,index)=>{
                  return <Userscard key={index}
                   img={el.img}
                   status={el.status}
                   delay={el.delay}
                   date={el.date}
                   month={el.month}
                  />
                })}
             </div>
        </div>
        <div className="part5-bar" >
             <div className="first-part">
              <h1 className='h1-task'>Task you initiated</h1>
              <p className='p-task'>Stay tuned with task you initiated</p>
                {Tasks.map((el,index)=>{
                  return <Taskcard key={index}
                    img={el.img}
                    title={el.title}
                    subtitle={el.subtitle}
                    progress={el.progress}
                  />
                })}
             </div>
             <div className="second-part">
             <h1 className='h1-task' style={{color:'#f70a16'}}>Overdue Actions</h1>
              <p className='p-task'>You're late,hury up!</p>
                 {Actions.map((el,index)=>{
                   return <Taskcard key={index}
                   img={el.img}
                   title={el.title}
                   subtitle={el.subtitle}
                   progress={el.progress}
                 />
                 })}
             </div>
        </div>
      </div>
            {showSidebar && <Sidebar
              closebutton={setShowSidebar}
              />}
  </div>
   
  )
}

export default Home