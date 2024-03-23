import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  // const jsonData = null;

  async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <h1>Error Demo</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Data: {JSON.stringify(data)}</p>
      )}
    </div>
  );
}

export default App;
