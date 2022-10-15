import React from 'react'
import './Taskcard.css'
const Taskcard = ({title,subtitle,progress,img}) => {
  const firstStyle = {backgroundColor:'#f70a16'}
  const secondStyle = {backgroundColor:'#ff5c11',width:'34px'}
  const thirdStyle={backgroundColor:'#0f6fec',width:'45px'}
  const fourthStyle={backgroundColor:'#16da26',width:'53px'}

  let style = firstStyle 
  if(progress <= 40){
    style=firstStyle
  }else if(progress>=41 && progress<=60){
    style=secondStyle
  }else if(progress>=61 && progress<=89){
    style=thirdStyle
  }else if(progress >=90){
    style=fourthStyle
  }
  return (
    <div className='taskcard'>
     <div className="taskcard-part1">
         <div className="image-task">
          <img src={img} alt="" />
             </div>
             <div className="title">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
             </div>
     </div>
           <div className="taskcard-part2">
                <div className="progress">

                    <div className="progress-input">
                        <div style={style} className="progress-percent">
                               <p>{progress}%</p>
                        </div>
                    </div>
                </div>
           </div>
    </div>
  )
}

export default Taskcard