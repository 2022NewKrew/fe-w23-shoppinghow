/**
 * This file executes expressJS server.
 * Run this code on node.
 * The server handles both back and front.
 */
const axios = require("axios").default;
const express=require("express");
const app=express();
const port=8000;
const jsonPath="/json/";
const apiPath="/api/";
const dibsReqPath=`${apiPath}dibs/`;
const viewReqPath=`${apiPath}view/`;
const searchReqPath=`${apiPath}search/`;
const googleSearchUrl="http://suggestqueries.google.com/complete/search";
const dibsItemIds={};
const viewItemIds={};
const webpack=require("webpack");
const webpackDevMiddleware=require("webpack-dev-middleware");
const webpackConfig=require("./webpack.config");
const webpackCompiler=webpack(webpackConfig);
app.use(webpackDevMiddleware(webpackCompiler));
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

app.post(dibsReqPath, (req, res)=>{
  const itemId=req.body.itemId;
  if(itemId===undefined){
    return res.sendStatus(400);
  }
  dibsItemIds[itemId]=true;
  return res.sendStatus(200);
});

app.get(dibsReqPath, (req, res)=>{
  return res.send(JSON.stringify(dibsItemIds)).status(200);
});

app.get(searchReqPath, async(req, res)=>{
  const keyword=req.query.keyword;
  let googleRes;
  try{
    googleRes=await axios.get(googleSearchUrl, {
      params: {
        output: "firefox",
        q: keyword
      }
    });
    const relatedKeywords=googleRes.data[1];
    return res.send(JSON.stringify(relatedKeywords)).status(200);
  }catch(e){
    console.error(e.message);
    return res.sendStatus(400);
  }
});
