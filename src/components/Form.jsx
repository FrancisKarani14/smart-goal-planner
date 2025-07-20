import React from 'react'
import '../reset.css'

export default function Form() {
  return (
    <form >
      <input type='text' name='' placeholder='Add your savings goal' />
       <input type='number' name='' placeholder='your Target Amount' />
        <input type='number' name='' placeholder='Add your saved amount' />
         <input type='number' name='' placeholder='Add your balance'/>
         <input type='text' name='' placeholder='enter your category'/>
         <input type='date' name='' placeholder='Add your Deadline'/>
         <input type='date' name='' placeholder='enter current date'/>
         <button>Add Your Goal</button>
         
         
        
    </form>
  )
}
