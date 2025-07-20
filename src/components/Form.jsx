import React from 'react'
import '../reset.css'

export default function Form({formData}) {
  return (
    <form >
      <input type='text'  placeholder='Add your savings goal' value={formData.name}/>
       <input type='number'  placeholder='your Target Amount' value={formData.targetAmount}/>
        <input type='number'  placeholder='Add your saved amount'value={formData.savedAmount} />
         <input type='number'  placeholder='Add your balance' value={formData.balance}/>
         <input type='text'  placeholder='enter your category' value={formData.category}/>
         <input type='date'  placeholder='Add your Deadline'value={formData.deadline}/>
         <input type='date'  placeholder='enter current date' value={formData.createdAt}/>
         <button>Add Your Goal</button>
         
         
        
    </form>
  )
}
