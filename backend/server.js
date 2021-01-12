const express = require('express');
const data = require('./data');

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(3000, () => console.log('Serve at http://localhost:3000'));
