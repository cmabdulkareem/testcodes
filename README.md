# testcodes
<h3>Sending object from server to client<br>
and displaying on a card component</h3>
<h4>app.js // Backened script</h4>

```
const express = require('express');
const cors = require('cors'); // First, install CORS with npm install cors
const app = express();

app.use(cors()); // This will enable all CORS requests. For production, configure it as needed.

app.get('/', (req, res) => {
    let data = {
        name: "ChatGPT",
        age: 3,
        purpose: "Conversational AI"
    };
    res.json(data);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```
<h4>// Frontent scripts</h4>
<h5>DataCard.jsx // frontend script</h5>

```
// components/DataCard.js
import React from 'react';

const DataCard = ({ data }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '5px' }}>
      <h1>{data.name}</h1>
      <p>Age: {data.age}</p>
      <p>Purpose: {data.purpose}</p>
    </div>
  );
};

export default DataCard;
```