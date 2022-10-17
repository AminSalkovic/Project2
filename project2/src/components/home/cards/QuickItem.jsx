import React from 'react'
import { useState } from 'react'
import './QuickItem.css'
const QuickItem = ({closebutton}) => {
    const[itemTitle,setItemTitle]=useState('')
    const[empty,setEmpty]=useState(false)
    const sendForm=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='quickitem-form'>
          <h1>Create Quick Item</h1>
          <div className="form-validation">
            <form onSubmit={sendForm}>
                <div className="item-title">
                    <p>Item Title</p>
                    <input type="text"/>
                </div>
                <div className="item-group">
                    <div className="first-input">
                        <p>Type</p>
                        <input type="text" />
                    </div>
                    <div className="second-input">
                        <p>Bussines Unit</p>
                        <input type="text" />
                    </div>
                    <div className="third-input">
                        <p>Due Date</p>
                        <input type="text" />
                    </div>
                    <div className="fourth-input">
                        <p>Priority</p>
                        <input type="text" />
                    </div>  
                </div>
                <div className="message-input">
                    <p>Objective</p>
                    <input type="text" />
                </div>
            </form>
          </div>
           <div className="quickitem-buttons">
              <button onClick={()=>closebutton((previous)=>previous=false)}>Close</button>
              <button type='submit'>Submit</button>
           </div>
    </div>
  )
}

export default QuickItem