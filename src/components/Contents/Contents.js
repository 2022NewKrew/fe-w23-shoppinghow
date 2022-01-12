import Component from "@core/Component";
import Promotion from "@components/Contents/Promotion";
import ProductContainer from "@components/Contents/ProductContainer";
import { recentViewedItemModel, pickedItemModel } from "@models/ItemModel";
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
    if (target.classList.contains("product__pick-btn")) {
      this.clickPickBtn(target);
    } else if (target.closest(".product__item")) {
      this.addRecentItem(target);
    }
  }

  clickPickBtn(target) {
    if (target.classList.contains("pick-btn-activated")) {
      this.removePickedItem(target);
    } else {
      this.addPickedItem(target);
    }
  }

  removePickedItem(target) {
    target.classList.remove("pick-btn-activated");
    try {
      const productContainerIdx = target.closest(".product-group").dataset.idx;
      const productItemIdx = target.closest(".product__item").dataset.idx;
      const productItem = this.getProductItem(
        productContainerIdx,
        productItemIdx
      );
      pickedItemModel.removeItem(productItem);
    } catch (error) {
      console.error(error);
    }
  }

  addPickedItem(target) {
    target.classList.add("pick-btn-activated");
    try {
      const productContainerIdx = target.closest(".product-group").dataset.idx;
      const productItemIdx = target.closest(".product__item").dataset.idx;
      const productItem = this.getProductItem(
        productContainerIdx,
        productItemIdx
      );
      pickedItemModel.addItem(productItem);
    } catch (error) {
      console.error(error);
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
      recentViewedItemModel.addItem(productItem);
    } catch (error) {
      console.error(error);
    }
  }

  getProductItem(productContainerIdx, productItemIdx) {
    return this.#productGroupList[productContainerIdx].products[productItemIdx];
  }
}

export default Contents;
