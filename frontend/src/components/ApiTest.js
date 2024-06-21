import React, { useEffect } from 'react';
import axios from 'axios';

const ApiTest = () => {
  useEffect(() => {
    const testApi = async () => {
      try {
        const response = await axios.get('http://localhost:3000/items');
        console.log('API response:', response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    testApi();
  }, []);

  return <div>API Test Component</div>;
};

export default ApiTest;
