import React, { useState, useEffect } from 'react';
import { getItem, updateItem } from '../services/itemService';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateItem.css'; // Ensure the correct path to your CSS file

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const { data } = await getItem(id);
    setName(data.name);
    setDescription(data.description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(id, { name, description });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Update Item</h2>
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
      <button type="submit" className="submit-button">Update</button>
    </form>
  );
};

export default UpdateItem;
