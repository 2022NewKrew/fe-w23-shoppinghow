/**
 * This main.js is the entrypoint of
 * client side javascript.
 * Feed this file to Webpack.
 */
import "./style/app.scss";
import { createAll } from "./creates";
import dibsItemIdsModel from "./model/DibsItemIdsModel";
import itemDataModel from "./model/ItemDataModel";
import viewItemIdsModel from "./model/ViewItemIdsModel";

(async function initDefault(){
  await itemDataModel.fetchData();
  await viewItemIdsModel.fetchData();
  await dibsItemIdsModel.fetchData();
  createAll();
})();
