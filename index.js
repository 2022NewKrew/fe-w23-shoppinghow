/**
 * This file executes expressJS server.
 * Run this code on node.
 * The server handles both back and front.
 */
const express=require("express");
const itemData=require("./json/items.json");
const app=express();
const port=8000;
const jsonPath="/json/";
const apiPath="/api/";
const zzimReqPath=`${apiPath}zzim/`;
const viewReqPath=`${apiPath}view/`;
const zzimItemIds={};
const viewItemIds={};
/**
 * Without using json middleware,
 * express cannot acquire request body.
 */
app.use(express.json());
app.use("/", express.static("output"));
app.use(jsonPath, express.static("json"));
app.listen(port, ()=>{
  console.log("express listening.");
});

app.post(viewReqPath, (req, res)=>{
  const itemId=req.body.itemId;
  if(itemId===undefined){
    return res.sendStatus(400);
  }
  viewItemIds[itemId]=true;
  return res.sendStatus(200);
});

app.get(viewReqPath, (req, res)=>{

  return res.send(JSON.stringify(viewItemIds)).status(200);
});

app.post(zzimReqPath, (req, res)=>{
  const itemId=req.body.itemId;
  if(itemId===undefined){
    return res.sendStatus(400);
  }
  zzimItemIds[itemId]=true;  
  return res.sendStatus(200);
});

app.get(zzimReqPath, (req, res)=>{
  return res.send(JSON.stringify(zzimItemIds)).status(200);
});
