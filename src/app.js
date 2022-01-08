/**
 * This main.js is the entrypoint of
 * client side javascript.
 * Feed this file to Webpack.
 */
import "./style/app.scss";
import { createAll } from "./creates";

(function initDefault(){
  createAll();
})();
