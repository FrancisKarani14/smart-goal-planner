import React from 'react'
import Display from './Display'
import Form from './Form'
import '../reset.css'

function App() {
  return (
    <div className='body'>
      <h1 className='welcome'>Welcome to Smart Goal Planner</h1>
      <Form />
      <Display />
    </div>
  )
}

export default App
