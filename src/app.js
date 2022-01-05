import "./sass/app.scss";
import Header from "@components/Header.js";
import Contents from "@components/Contents";

const $body = document.querySelector("body");
const $header = document.createElement("header");
const $contents = document.createElement("div");

$body.appendChild($header);
$body.appendChild($contents);
$contents.classList.add("container");

new Header($header);
new Contents($contents);
