import Top10Input from "../components/Top10Input";
import Component from "../core/Component.js";

// function createHeader() {
//   const top = document.createElement("div");
//   const input = new Top10Input();

//   top.insertAdjacentHTML(
//     "afterbegin",
//     `
//       <div class="header-top">
//           <div class="title">
//               <h1>쇼핑하우</h1>
//           </div>
//           ${input.render()}
//       </div>
//         `
//   );

//   const header = document.getElementById("header");
//   header.appendChild(top);
// }

export default class Header extends Component {
  mounted() {
    const $headerTop = this.$target.querySelector(".header-top");
    const top10Data = require("../data/searchTop10.json").top10;
    new Top10Input($headerTop, { top10Data });
  }
  template() {
    return `
      <div class="header-top">
          <div class="title">
              <h1>쇼핑하우</h1>
          </div>  
      </div>
    `;
  }
}
