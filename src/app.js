import { hello } from "./hello.js";

const app = document.querySelector("#app");
app.innerHTML = "App is rendering";
app.appendChild(hello());