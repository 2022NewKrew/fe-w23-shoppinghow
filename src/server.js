const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 1129;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/home.html"));
});
app.get("/dummy", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/dummy.html"));
});

app.listen(PORT, () => {
  console.log(`
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃   Server listening on port: ${PORT}    ┃
  ┃     http://localhost:${PORT}/          ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  `);
});
