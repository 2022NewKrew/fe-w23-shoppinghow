import { $ } from "@utils/query.js";
import { Component } from "@core/Component";
import { api } from "@utils/api.js";

export default class HotDeal extends Component {
  setUp() {
    this.$state = {
      hotDealList: [],
    };
  }
  template() {
    const { hotDealList } = this.$state;
    return `
      <h2 class="hot-deal__title">품절주의, 역대급 핫딜</h2>
      <ul class="hot-deal__list">
        ${
          hotDealList.length > 0 &&
          hotDealList
            .map(item => {
              return `
            <li class="hot-deal__item">
              <a href="${item.href}">
                <img src="${item.src}" alt="${item.name}"/>
                <strong class="hot-deal__item--title">${item.name}</strong>
                <div class="hot-deal__item--info">
                  <div class="hot-deal__item--detail-price">
                    <div class="hot-deal__item--discount">${item.discount}</div>
                    <div class="hot-deal__item--percent">${item.percent}</div>
                  </div>
                  <div class="hot-deal__item--price">${item.price}</div>
                </div>
              </a>
            </li>
          `;
            })
            .join("")
        }
      </ul>
    `;
  }
  setEvent() {}
  async mounted() {
    const { result } = await api.get("hotdeal");
    if (JSON.stringify(this.$state.hotDealList) !== JSON.stringify(result)) {
      this.setState({ hotDealList: result });
    }
  }
}
