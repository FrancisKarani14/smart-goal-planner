import React from 'react'
import { useState, useEffect } from 'react'
import Goalscard from './Goalscard'
import Form from './Form'
import '../reset.css'

function App() {
// Fetch request as a sude effect since it fetches after render.
  useEffect(()=>{
    fetch(" http://localhost:3000/goals")

  },[])

  return (
    <div className='body'>
      <h1 className='welcome'>Welcome to Smart Goal Planner</h1>
      <Form />
      <div>
        <ul>
          <Goalscard /> 
        </ul>

      </div>
    </div>
  )
}

export default App
