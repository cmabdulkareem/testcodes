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
