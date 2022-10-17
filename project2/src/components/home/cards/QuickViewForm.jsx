import React from 'react'
import './QuickViewForm.css'
const QuickViewForm = ({handleForm}) => {
  return (
    <div className='quickviewform'>
          <h1>Quick View</h1>
          <div className="quick-text">
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, beatae ipsam. A, libero corrupti. Veniam rem laborum iure voluptate modi. Illo officia eaque rem animi placeat qui at reprehenderit sit quaerat. Odit earum eius ex ipsum debitis. Officiis debitis ipsum facilis facere perferendis, maxime dolores, rerum ad eveniet, impedit error voluptatum corrupti culpa iure modi sapiente. Quaerat consequuntur inventore cumque enim sequi. Perferendis consectetur tenetur nobis rem totam, dolores quam, nam laborum, iste molestiae est quis consequatur repellendus nihil. Animi numquam quia molestias voluptatem perspiciatis, facere autem, reiciendis accusantium est voluptatibus maiores iure eius hic porro corrupti commodi blanditiis aspernatur dicta quis doloribus. Quasi molestias ipsum dolorum eum nam sed fugiat quibusdam nesciunt, eius recusandae impedit aperiam debitis modi. Magnam quidem blanditiis ea nisi repellendus cum harum quas architecto, totam error quam suscipit laudantium id voluptas a, autem ab illo ipsa quisquam veritatis eius est facere. Animi pariatur rem necessitatibus odio assumenda cupiditate explicabo iusto, repellendus molestias deserunt hic inventore fugiat labore fuga accusamus nemo exercitationem quos doloremque corrupti? Sunt ut quo sint suscipit pariatur quae quasi doloribus earum dolores praesentium. Esse in harum voluptas officia molestias quidem praesentium ipsa at ex sit illum quaerat saepe qui id inventore laudantium et nisi quam, blanditiis, deleniti maiores nam cum. Quod ut, nam tempore architecto recusandae unde minus quo, odit quisquam labore sequi, aliquam dolorum. Iure similique qui culpa neque placeat voluptatem fugiat temporibus ad delectus! Repudiandae et, laudantium pariatur aut aperiam vel ullam? Quam accusamus labore at officia aspernatur culpa libero pariatur in minima a nihil beatae ex nemo mollitia odit voluptas deleniti, nesciunt voluptate est molestiae. Nesciunt suscipit culpa dicta quasi pariatur, minus voluptas, vitae ducimus facere architecto omnis eveniet. Facilis nihil nostrum numquam architecto, tempore animi! Optio molestiae recusandae voluptate debitis praesentium placeat exercitationem nemo eum sequi sunt! Commodi.
             </p>
          </div>
           <div className="button-form">
              <button onClick={()=>handleForm((previous)=>(previous=false))}>Close</button>
              <button onClick={()=>handleForm((previous)=>(previous=false))}>Ok</button>
           </div>
    </div>
  )
}

export default QuickViewForm