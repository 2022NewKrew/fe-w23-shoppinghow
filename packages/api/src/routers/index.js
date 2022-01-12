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

export default APIRouter;
