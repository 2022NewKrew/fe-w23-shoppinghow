const themes = require("../data/themes.json").themes;

export default function createBanners() {
  const theme = document.createElement("div");

  theme.innerHTML = `
  <div class="theme">
    <ul class="theme-container">
      ${themes
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
  </div>
    `;

  const promotion = document.getElementById("promotion");
  promotion.appendChild(theme);
}
