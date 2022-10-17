import React,{useState} from 'react'
import './QuickItem.css'

const QuickItem = ({closebutton}) => {
  return (
    <div className='quickitem-form'>
          <h1>Create Quick Item</h1>
          <div className="form-validation">
            <form>
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
                <div className="checkvalue">
                    <div className="first-column">
                       <input type='radio'/>
                       <label>MarketingCoordinator</label><br />
                       <input type='radio'/>
                       <label>Web Designer</label><br />
                       <input type='radio'/>
                       <label>President of Sales</label>
                    </div>
                    <div className="second-column">
                        <input type="checkbox" />
                        <label>Spanish</label><br />
                        <input type="checkbox" />
                        <label>Chinese</label><br />
                        <input type="checkbox" />
                        <label>Arabic</label>
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