import React from 'react'
import '../reset.css'

export default function Form({formData, handleChange}) {
  return (
    <form >
      <input type='text' name='name' placeholder='Add your savings goal' value={formData.name} onChange={handleChange} />
       <input type='number' name='targetAmount' placeholder='your Target Amount' value={formData.targetAmount} onChange={handleChange} />
        <input type='number' name='savedAmount' placeholder='Add your saved amount'value={formData.savedAmount}  onChange={handleChange}/>
         <input type='number' name='balance'  placeholder='Add your balance' value={formData.balance} onChange={handleChange}/>
         <input type='text' name='category' placeholder='enter your category' value={formData.category} onChange={handleChange}/>
         <input type='date' name='deadline' placeholder='Add your Deadline'value={formData.deadline} onChange={handleChange}/>
         <input type='date' name='createdAt' placeholder='enter current date' value={formData.createdAt} onChange={handleChange}/>
         <button>Add Your Goal</button>
         
         
        
    </form>
  )
}
