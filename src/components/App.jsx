import React from 'react'
import { useState, useEffect } from 'react'
import Goalscard from './Goalscard'
import Form from './Form'
import '../reset.css'

function App() {
// Fetch request as a sude effect since it fetches after render.
// state variables
    const[goals, setGoals] = useState([])

  useEffect(()=>{

    
    fetch(" http://localhost:3000/goals")
    .then(res=>res.json())
    .then(data=> setGoals(data) )
    .catch(err => console.error("Error:", err));
     },[])

    //  function for handling delete. It deletes A goal specific goal when clicked

    function handleDelete(params) {
      
    }

    // function for handling update it Updates a goal when clicked

    function handleUpdate() {

      
    }

  return (
    <div className='body'>
      <h1 className='welcome'>Welcome to Smart Goal Planner</h1>
      <Form />
      <div className='display' >
        <ul>
          {goals.map((goal)=>{
            return(
               <li key={goal.id}>
              <Goalscard  {...goal} handleDelete={handleDelete} handleUpdate={handleUpdate} />
            </li>
            )
           
          })}
        </ul>

      </div>
    </div>
  )
}

export default App
