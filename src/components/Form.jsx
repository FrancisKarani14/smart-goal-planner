import React from 'react';
import '../reset.css';

export default function Form({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        placeholder="Add your savings goal"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="targetAmount"
        placeholder="Your Target Amount"
        value={formData.targetAmount}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="savedAmount"
        placeholder="Add your saved amount"
        value={formData.savedAmount}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="balance"
        placeholder="Balance (auto-calculated)"
        value={formData.balance}
        readOnly
      />
      <input
        type="text"
        name="category"
        placeholder="Enter your category"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        type="date"
        name="deadline"
        placeholder="Add your Deadline"
        value={formData.deadline}
        onChange={handleChange}
      />
      <input
        type="date"
        name="createdAt"
        placeholder="Enter current date"
        value={formData.createdAt}
        onChange={handleChange}
      />
      
      <button type="submit">
        {formData.id ? "Update Goal" : "Add Your Goal"}
      </button>
    </form>
  );
}
