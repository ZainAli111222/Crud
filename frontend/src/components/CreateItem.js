import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createItem } from '../services/itemService';
import './CreateItem.css';  // Import your CSS file

const CreateItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) {
      setError('Name and description are required.');
      return;
    }
    await createItem({ name, description });
    setName('');
    setDescription('');
    setError('');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Create Item</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-button">Create</button>
    </form>
  );
};

export default CreateItem;
