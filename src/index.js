import css from "./scss/main.scss";
import createHeader from "./layouts/header.js";
import createNavbar from "./layouts/navbar.js";
import createMain from "./components/main.js";

function init() {
  createHeader();
  createNavbar();
  createMain();
}

init();
