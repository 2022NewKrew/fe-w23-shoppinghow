import Component from "@core/Component";
import ProductItem from "@components/Contents/ProductItem";

class HotDeal extends Component {
  template() {
    return `
        <div class="product-group">
            <h2 class="section-title">${this.props.title}</h2>
            <ul class="product-list"></ul>
        </div>
    `;
  }

  mounted() {
    const $hotDealList = this.$target.querySelector(".product-list");
    fetch("http://localhost:3000/hotDealItems.json")
      .then((res) => res.json())
      .then((hotDealItemList) => {
        hotDealItemList.map(
          (hotDealItem) => new ProductItem($hotDealList, hotDealItem)
        );
      });
  }
}

export default HotDeal;
