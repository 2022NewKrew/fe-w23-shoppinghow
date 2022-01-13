import { $ } from "@utils/query.js";
import { Component } from "@core/Component";
import { api } from "@utils/api.js";
import { RecentViewStore } from "@store/RecentViewStore";

export default class HotDeal extends Component {
  setUp() {
    this.$state = {
      hotDealList: [],
    };
    this.$hotDealClickHandler = this.hotDealClickHandler.bind(this);
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
            <li class="hot-deal__item" data-value="${item.id}">
              <div class="hot-deal__item-wrapper">
                <img src="${item.src}" alt="${item.name}"/>
                <strong class="hot-deal__item--title">${item.name}</strong>
                <div class="hot-deal__item--info">
                  <div class="hot-deal__item--detail-price">
                    <div class="hot-deal__item--discount">${item.discount}</div>
                    <div class="hot-deal__item--percent">${item.percent}</div>
                  </div>
                  <div class="hot-deal__item--price">${item.price}</div>
                </div>
              </div>
            </li>
          `;
            })
            .join("")
        }
      </ul>
    `;
  }
  setEvent() {
    $(".hot-deal__list", this.$target).addEventListener("click", this.$hotDealClickHandler);
  }
  removeEvent() {
    $(".hot-deal__list", this.$target).removeEventListener("click", this.$hotDealClickHandler);
  }

  hotDealClickHandler({ target }) {
    if (target.closest(".hot-deal__item") === undefined) {
      return;
    }
    const clickedItem = target.closest(".hot-deal__item");
    const clickedId = clickedItem.getAttribute("data-value");
    this.viewItemRequest(clickedId);
    alert("물품 클릭");
  }
  async mounted() {
    const { result } = await api.get("hotdeal");
    if (JSON.stringify(this.$state.hotDealList) !== JSON.stringify(result)) {
      this.setState({ hotDealList: result });
    }
  }

  async viewItemRequest(viewItemId) {
    const { result } = await api.get(`view/${viewItemId}`);
    console.log(result);
    RecentViewStore.dispatch({
      actionKey: "VIEW",
      item: { recentViewList: result },
    });
  }
}
