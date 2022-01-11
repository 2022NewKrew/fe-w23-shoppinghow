import Component from "@core/Component";
import Promotion from "@components/Contents/Promotion";
import ProductContainer from "@components/Contents/ProductContainer";
import recentItemModel from "@models/RecentItemModel";
import { fetchData } from "@utils/apiUtils";

const PRODUCT_GROUP_LIST_DATA_URL = "http://localhost:3000/productGroups.json";

class Contents extends Component {
  #productGroupList;

  template() {
    return `
        <div class="container"></div>
    `;
  }

  async mounted() {
    const $container = this.$target.querySelector(".container");
    new Promotion($container);
    this.#productGroupList = await fetchData(PRODUCT_GROUP_LIST_DATA_URL);
    this.#productGroupList.map(
      (productGroup, idx) =>
        new ProductContainer($container, { idx, ...productGroup })
    );
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
