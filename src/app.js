import "./sass/app.scss";
import Header from "@components/Header.js";

const headerEl = new Header();

document.querySelector("header").innerHTML += headerEl.render();
