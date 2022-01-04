const top10 = require("../data/searchTop10.json").top10;

export default function createHeader() {
  const top = document.createElement("div");

  top.insertAdjacentHTML(
    "afterbegin",
    `
            <div class="header-top">
                <div class="title">
                    <h1>쇼핑하우</h1>
                </div>
                <div class="search">
                    <form>
                        <input type="text" class="search__input" />
                        <button class="search__icon">🔍</button>
                    </form>
                    <ul class="search-top10" id="top10Container">
                    ${top10
                      .map(
                        ({ rank, title }) => `
                        <li class="search-top10__item">${rank}. ${title}</li>
                      `
                      )
                      .join("")}
                    </ul>
                </div>
            </div>
    
        `
  );

  const header = document.getElementById("header");
  header.appendChild(top);
}

function shiftTop10() {
  const slide = document.getElementById("top10Container");
}
