import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import CreateItem from './components/CreateItem';
import UpdateItem from './components/UpdateItem';
import ApiTest from './components/ApiTest';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/create" element={<CreateItem />} />
      <Route path="/update/:id" element={<UpdateItem />} />
      <Route path="/api-test" element={<ApiTest />} />
    </Routes>
  </Router>
);

export default App;
