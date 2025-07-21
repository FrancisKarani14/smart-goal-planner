import React, { useState, useEffect } from 'react';
import Goalscard from './Goalscard';
import Form from './Form';
import '../reset.css';

function App() {
  const [goals, setGoals] = useState([]);
 const [formData, setFormData] = useState({
  name: '',
  targetAmount: '',
  savedAmount: '',
  balance: '',
  category: '',
  deadline: '',
  createdAt: new Date().toISOString().split('T')[0]  // today in yyyy-mm-dd
});

  const numberOfGoals = goals.length

  const url = 'http://localhost:3000/goals';

  // Fetch goals on initial render
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setGoals(data))
      .catch(err => console.error("Fetch Error:", err));
  }, []);
  
  useEffect(() => {
  const interval = setInterval(() => {
    setFormData(prev => ({
      ...prev,
      createdAt: new Date().toISOString().split('T')[0]
    }));
  }, 86400000); // 24 hrs in ms

  return () => clearInterval(interval);
}, []);


  // Automatically update balance when target/saved amounts change
  useEffect(() => {
    const balance = Number(formData.targetAmount) - Number(formData.savedAmount);
    setFormData(prev => ({
      ...prev,
      balance: balance >= 0 ? balance : 0
    }));
  }, [formData.targetAmount, formData.savedAmount]);

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  // Handle goal deletion
  function handleDelete(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this goal?");
    if (!confirmDelete) return;

    fetch(`${url}/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          setGoals(prev => prev.filter(goal => goal.id !== id));
        } else {
          console.error("Delete failed.");
        }
      })
      .catch(err => console.error("Delete Error:", err));
  }

  // Handle editing (load goal into form)
  function handleUpdate(goal) {
    setFormData({
      id: goal.id,
      name: goal.name,
      targetAmount: goal.targetAmount,
      savedAmount: goal.savedAmount,
      balance: goal.balance,
      category: goal.category,
      deadline: goal.deadline,
      createdAt: goal.createdAt
    });
  }

  // Clear form after submit
  function clearForm() {
    setFormData({
      id: '',
      name: '',
      targetAmount: '',
      savedAmount: '',
      balance: '',
      category: '',
      deadline: '',
      createdAt: '',
    });
  }

  // Submit new or updated goal
  function handleSubmit(e) {
    e.preventDefault();

    if (formData.id) {
      // Update (PUT)
      fetch(`${url}/${formData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then(res => res.json())
        .then(updatedGoal => {
          setGoals(prev =>
            prev.map(goal => goal.id === updatedGoal.id ? updatedGoal : goal)
          );
          clearForm();
        })
        .catch(err => console.error("Update failed:", err));
    } else {
      // Create new (POST)
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then(res => res.json())
        .then(newGoal => {
          setGoals(prev => [...prev, newGoal]);
          clearForm();
        })
        .catch(err => console.error("Create failed:", err));
    }
  }

  return (
    <div className='body'>
      <h1 className='welcome'>Welcome to Smart Goal Planner</h1>
     
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
       <h3>Dear client, you have {numberOfGoals} goals </h3>
      <div className='display'>
        <ul>
          {goals.map(goal => (
            <li key={goal.id}>
              <Goalscard
                {...goal}
                handleDelete={handleDelete}
                handleUpdate={() => handleUpdate(goal)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
