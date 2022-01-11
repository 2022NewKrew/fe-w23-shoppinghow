import Component from "@core/Component";
import Promotion from "@components/Contents/Promotion";
import ProductContainer from "@components/Contents/ProductContainer";
import recentItemModel from "@models/RecentItemModel";

class Contents extends Component {
  #productGroupList;

  template() {
    return `
        <div class="container"></div>
    `;
  }

  mounted() {
    const $container = this.$target.querySelector(".container");
    new Promotion($container);
    fetch("http://localhost:3000/productGroups.json")
      .then((res) => res.json())
      .then((productGroupList) => {
        this.#productGroupList = productGroupList;
        productGroupList.map(
          (productGroup, idx) =>
            new ProductContainer($container, { idx, ...productGroup })
        );
      });
  }

  setEvent() {
    this.addEvent("click", ".container", this.handelMouseclick.bind(this));
  }

  handelMouseclick(e) {
    const { target } = e;
    if (target.closest(".product__item")) {
      this.addRecentItem(target);
    }
  }

  addRecentItem(target) {
    try {
      const productContainerIdx = target.closest(".product-group").dataset.idx;
      const productItemIdx = target.closest(".product__item").dataset.idx;
      const productItem = this.getProductItem(
        productContainerIdx,
        productItemIdx
      );
      recentItemModel.addRecentItem(productItem);
    } catch (error) {
      console.error(error);
    }
  }

  getProductItem(productContainerIdx, productItemIdx) {
    return this.#productGroupList[productContainerIdx].products[productItemIdx];
  }
}

export default Contents;
