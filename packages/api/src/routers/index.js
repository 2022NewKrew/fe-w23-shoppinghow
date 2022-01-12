import { Router } from "express";
import Service from "../service/index.js";

const APIRouter = Router();

APIRouter.get("/rollkeyword", (req, res) => {
  const data = Service.getRollKeyword();
  return res.send(data);
});

APIRouter.get("/suggestion", (req, res) => {
  const data = Service.getSuggestion();
  return res.send(data);
});

APIRouter.get("/navigator", (req, res) => {
  const data = Service.getNavigator();
  return res.send(data);
});

APIRouter.get("/marticle", (req, res) => {
  const data = Service.getMArticle();
  return res.send(data);
});

APIRouter.get("/hotdeal", (req, res) => {
  const data = Service.getHotDeal();
  return res.send(data);
});

APIRouter.get("/hotkeyword", (req, res) => {
  const data = Service.getHotKeyword();
  return res.send(data);
});

export default APIRouter;
