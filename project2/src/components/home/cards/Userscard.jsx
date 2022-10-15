import React from 'react'
import * as AiIocns from 'react-icons/ai'
import './Userscard.css'
const Userscard = ({image,status,delay}) => {
  const firstStyle = {backgroundColor:'#9fd398',color:'#0f5506'}
  const secondStyle = {backgroundColor:'#cfa4a4',color:"#ff6d0c"}
  const thirdStyle={backgroundColor:'#cf9b9b',color:'rgb(245,3,3)'}

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
         <div className="image"> 
        </div>
        <div className="delay">
            <button>{delay}</button>
        </div>
        <div className="status">
              <div className="eye">
              <AiIocns.AiOutlineEye/>
              </div>
             <div className='status-div' style={style}><p style={style}>{status}</p></div>
        </div>
      
    </div>
  )
 
}

export default Userscard