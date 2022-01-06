import Top10Input from "../components/top10Input";

const top10 = require("../data/searchTop10.json").top10;

export default function createHeader() {
  const top = document.createElement("div");
  const input = new Top10Input();

  top.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="header-top">
          <div class="title">
              <h1>쇼핑하우</h1>
          </div>  
          ${input.render()}
      </div>
        `
  );

  const header = document.getElementById("header");
  header.appendChild(top);
}
