// import "dotenv/config";
const express = require("express");
const router = require("./src/router/router.js");
const engines = require("consolidate");
const app = express();
const PORT = process.env.PORT || 3000;

app.engine("html", engines.mustache);

app.set("view engine", "html");
app.set("views", __dirname + "/src/pages");

app.use("/", router);
app.use(express.static("src"));

app.listen(PORT, () => {
    console.log(`
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃   Server listening on port: ${PORT}    ┃
  ┃     http://localhost:${PORT}/          ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  `);
});
