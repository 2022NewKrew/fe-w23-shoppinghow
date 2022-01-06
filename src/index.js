import css from "./scss/main.scss";
import Header from "./layouts/header.js";
import Navbar from "./layouts/navbar.js";
import createMain from "./components/main.js";

const $body = document.querySelector("body");
const $header = document.querySelector("#header");
const container = document.querySelector("#container");

// createHeader();
new Header($header);
new Navbar($header);
createMain();
