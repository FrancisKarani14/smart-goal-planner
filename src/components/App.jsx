import React from 'react'
import { useState, useEffect } from 'react'
import Goalscard from './Goalscard'
import Form from './Form'
import '../reset.css'

function App() {

  // state variables
    const[goals, setGoals] = useState([])
   const [formData, setFormData] = useState({
  name: '',
  targetAmount: '',
  savedAmount: '',
  balance: '',
  category: '',
  deadline: '',
  createdAt: ''
});
//Sets the url into a variable for easier control 
 const url = 'http://localhost:3000/goals'

// Fetch request as a sude effect since it fetches after render.
// state variables
  useEffect(()=>{

    
    fetch(url)
    .then(res=>res.json())
    .then(data=> setGoals(data) )
    .catch(err => console.error("Error:", err));
     },[])

    //  function for handling delete. It deletes A goal specific goal when clicked

    function handleDelete(id) {
  const confirmDelete = window.confirm("Are you sure you want to delete this goal?");

  if (confirmDelete) {
     fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        setGoals((prevGoals) => prevGoals.filter(goal => goal.id !== id));
      } else {
        console.error("Failed to delete goal");
      }
    })
    .catch((err) => console.error("Error:", err));
}else{
    return
  }
  }

 

    // function for handling update it Updates a goal when clicked

    function handleUpdate() {
      fetch(`${url}/${id}`,{
        method:"PUT",
      })
      
    }

  return (
    <div className='body'>
      <h1 className='welcome'>Welcome to Smart Goal Planner</h1>
      <Form formData={formData} />
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
