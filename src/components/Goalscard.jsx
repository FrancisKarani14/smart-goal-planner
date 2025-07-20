import React from 'react'
import '../reset.css'

export default function Goalscard({name, targetAmount, savedAmount, balance, category, deadline, createdAt, handleUpdate, handleDelete }) {
  return (
    <div className='card' >
      <h2>{name} </h2>
       <p> Target Amount {targetAmount} </p>
        <p> Saved Amount {savedAmount} </p>
         <p> Balance {balance} </p>
          <p> category {category} </p>
           <p> Deadline{deadline} </p>
           <p> Starting Day{createdAt} </p>
           <button onClick={handleDelete} >Delete</button>
           <button onClick={handleUpdate}>update</button>
           
      
    </div>
  )
}
