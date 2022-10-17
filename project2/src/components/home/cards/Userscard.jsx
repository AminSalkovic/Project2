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
  
  const datecolorstyle1 ={color:'#0f5506'}
  const datecolorstyle2 ={color:"#ff6d0c"}
  const datecolorstyle3={color:'rgb(245,3,3)'}

  let datecolor=datecolorstyle1
  if(status =='Approved'){
     datecolor=datecolorstyle1
  }else if(status=='In Progress'){
     datecolor=datecolorstyle2
  }else if(status=='Rejected'){
     datecolor=datecolorstyle3
  }

  const delaybutton='delay button'
  const style1={delaybutton}
  const style2={display:'none'}
  let buttonstyle=style1
  if(status=='Rejected'){
    buttonstyle=style1
  }else{
    buttonstyle=style2
  }
  return (
    <div className='userscard'>
        <div className="date">
            <div style={style} className="calendar-color">
          </div>
            <div className="calendar-date">
                <h1 style={datecolor}>{month}</h1>
                <p style={datecolor}>{date}</p>
            </div>
        </div>
         <div className="image"> 
         <img src={userImg} alt="" />
        </div>
        <div className="delay">
            <button style={buttonstyle}>{delay}</button>
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