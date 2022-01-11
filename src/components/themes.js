import Component from "../core/Component";
export default class Themes extends Component {
  template() {
    const themeData = require("../data/themes.json").themes;
    return `
    <ul class="theme-container">
      ${themeData
        .map(
          ({ title, description, img }) => `
          <li class="theme-item">
            <a href="#" class="theme__link">
              <span class="theme-item__info">
                <img
                  src=${img}
                  width="200"
                  height="200"
                  class="img_top"
                  alt=${title} />
              </span>
              <strong class="theme-item__title">${title}</strong>
              <span class="theme-item__desc">${description}</span>
              <span class="theme-item__icon">테마</span>
            </a>
          </li>
        `
        )
        .join("")}
    </ul>
    `;
  }
}
