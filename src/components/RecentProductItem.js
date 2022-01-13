import Component from "../core/Component";

export default class RecentProductItem extends Component {
  itemData;
  setup() {}
  template() {
    const { img } = this.$props;
    return `
            <img class = "recent-product-item" src=${img}>
        `;
  }
}
