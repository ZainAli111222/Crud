import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getItems, deleteItem } from '../services/itemService';
import './ItemList.css'; // Ensure the correct path to your CSS file

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const { data } = await getItems();
    setItems(data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  return (
    <div className="table-container">
      <h2>Items</h2>
      <Link to="/create" className="create-button">Create New Item</Link>
      <table className="item-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button className="action-button" onClick={() => handleDelete(item.id)}>Delete</button>
                <Link to={`/update/${item.id}`}>
                  <button className="action-button">Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
