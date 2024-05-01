// App.js
import React, { useEffect, useState } from 'react';
import DataCard from './components/DataCard';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/') // Adjust if your endpoint differs
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      {data ? <DataCard data={data} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
