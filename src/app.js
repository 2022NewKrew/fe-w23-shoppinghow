import { hello } from "./hello.js";

const app = document.querySelector("#app");
app.innerHTML = "App is Modified";
app.appendChild(hello());