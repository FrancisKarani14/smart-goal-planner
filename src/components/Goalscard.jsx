import React from 'react'
import '../reset.css'

export default function Goalscard({name, targetAmount, savedAmount, balance, category, deadline, createdAt }) {
  return (
    <div>
      <h2>{name} </h2>
       <h2> Target Amount {targetAmount} </h2>
        <h2> Saved Amount {savedAmount} </h2>
         <h2> Balance {balance} </h2>
          <h2> category {category} </h2>
           <h2> Deadline{deadline} </h2>
           <h2> Starting Day{createdAt} </h2>
           <button>Delete</button>
           <button>update</button>
           
      
    </div>
  )
}
