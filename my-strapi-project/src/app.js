import React, { useEffect, useState } from 'react';
import api from './api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/your-endpoint') // Replace '/your-endpoint' with your Strapi endpoint
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching data from Strapi:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Data from Strapi</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
