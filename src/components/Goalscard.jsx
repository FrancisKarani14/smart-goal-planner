import React from 'react'
import '../reset.css'

export default function Goalscard({name, targetAmount, savedAmount, balance, category, deadline, createdAt, handleUpdate, handleDelete , id}) {
  return (
    <div className='card' >
      <h2>{name} </h2>
       <p> <strong>Target Amount:</strong> {targetAmount} </p>
        <p> <strong>Saved Amount:</strong> {savedAmount} </p>
         <p> <strong>Balance: </strong> {balance} </p>
          <p> <strong>category:</strong> {category} </p>
           <p className='deadline'> <strong>Deadline:</strong> {deadline} </p>
           <p> <strong>Starting Day:</strong> {createdAt} </p>
            <button onClick={() => handleDelete(id)} className='deleteBtn'>Delete</button>
      <button onClick={() => handleUpdate(id)} className='updateBtn'>Update</button>
           
      
    </div>
  )
}
