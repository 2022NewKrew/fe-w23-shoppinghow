const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('../client/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../client', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server Listen on ${port}`);
});