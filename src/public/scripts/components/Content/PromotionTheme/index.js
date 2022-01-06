import { $ } from "@utils/query.js";
import { Component } from "@core/Component";
import { api } from "@utils/api.js";

export default class PromotionTheme extends Component {
  setUp() {
    this.$state = {
      items: [],
    };
  }
  template() {
    const { items } = this.$state;
    return `
      <ul class="theme-container">
        ${
          items.length > 0 &&
          items
            .map(
              item => `
              <li class="theme-item">
                  <a href="${item.href}" class="theme__link">
                      <span class="theme-item__info">
                      <img
                          src="${item.src}"
                          width="${item.width}px"
                          height="${item.height}px"
                          class="img_top"
                          alt="${item.title}" /></span
                      >
                      <strong class="theme-item__title">${item.title}</strong>
                      <span class="theme-item__desc">${item.info}</span
                      ><span class="theme-item__icon">테마</span></a
                  >
              </li>
              `,
            )
            .join("")
        }
    </ul>
    `;
  }
  async mounted() {
    const { result } = await api.get("event/items");
    if (JSON.stringify(this.$state.items) !== JSON.stringify(result)) {
      this.setState({ items: result });
    }
  }
  setEvent() {}
}
