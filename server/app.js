const express = require('express');
const path = require('path');
const app = express();
const clientApp = path.join('../client', 'dist/index.html');
const port = 3000;

clientApp;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
