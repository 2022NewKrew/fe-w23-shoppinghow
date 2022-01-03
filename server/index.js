const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const __path = path.resolve();
app.use(express.static("dist"));

app.get("/", (req, res) => {
    console.log("GET /");
    res.sendFile(__path + "app");
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})