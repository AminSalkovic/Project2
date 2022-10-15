import React,{useState} from 'react'
import * as AiIocns from 'react-icons/ai'
import QuickViewForm from './QuickViewForm'
import './Userscard.css'
const Userscard = ({userImg,status,delay,month,date}) => {
 
  const[quickView,setQuickView]=useState(false)
  const handleForm=()=>{
    setQuickView(!quickView)
  }  
  const firstStyle = {backgroundColor:'#9fd398',color:'#0f5506'}
  const secondStyle = {backgroundColor:'#cfa4a4',color:"#ff6d0c"}
  const thirdStyle={backgroundColor:'#e45864',color:'rgb(245,3,3)'}

  let style = firstStyle 
  if(status =='Approved'){
    style=firstStyle
  }else if(status=='In Progress'){
    style=secondStyle
  }else if(status=='Rejected'){
    style=thirdStyle
  }
  return (
    <div className='userscard'>
        <div className="date">
            <div style={style} className="calendar-color">
          </div>
            <div className="calendar-date">
                <h1 style={{color:'style'}}>{month}</h1>
                <p style={{color:'style'}}>{date}</p>
            </div>
        </div>
         <div className="image"> 
         <img src={userImg} alt="" />
        </div>
        <div className="delay">
            <button>{delay}</button>
        </div>
        <div className="status">
              <div className="eye" onClick={handleForm}>
              <AiIocns.AiOutlineEye/>
              </div>
             <div className='status-div' style={style}><p style={style}>{status}</p></div>
        </div>
        {quickView&& <QuickViewForm
          handleForm={setQuickView}
        />}
    </div>
  )
 
}

export default Userscard