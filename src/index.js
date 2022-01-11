import css from "./scss/main.scss";
import Header from "./layouts/Header.js";
import Navbar from "./layouts/Navbar.js";
import Main from "./layouts/Main.js";

const $body = document.querySelector("body");
const $header = document.querySelector("#header");
const $container = document.querySelector("#container");

// createHeader();
new Header($header);
new Navbar($header);
new Main($container);
