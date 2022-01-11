import Component from "../core/Component";

export default class Item extends Component {
  itemData;
  setup() {
    this.itemData = this.$props;
  }
  template() {
    const { idx, title, price, original, discounted, img } = this.$props;
    return `
        <li class="hot-deal__item" id="data-${idx}">
          <a class="hot-deal__link">
              <span class="hot-deal__thumb">
                  <img src=${img} class="hot-deal__img" alt=${title}>
              </span>

              <strong class="hot-deal__title">${title}</strong>

              <span class="hot-deal__detail-price">
                  <span class="txt-price">${price}원</span>
                  <span class="txt-price-percent">${discounted}</span>
              </span>
          </a>
        </li>
      `;
  }

  // 해당 아이템 클릭시 로컬 스토리지에 데이터 추가
  setEvent() {
    const { idx, title, price, original, discounted, img } = this.$props;
    const elems = `#data-${this.itemData.idx}`;
    this.addEvent("click", elems, (e) => {
      localStorage.setItem("recent", JSON.stringify(this.$props));
    });
  }
}
