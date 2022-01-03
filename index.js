/**
 * This file executes expressJS server.
 * Run this code on node.
 * The server handles both back and front.
 */
const express=require("express");
const app=express();
const port=8000;

app.use("/", express.static("output"));
app.listen(port, ()=>{
  console.log("express listening.");
});