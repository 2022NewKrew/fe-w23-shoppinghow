import Component from "@core/Component";
import Promotion from "@components/Contents/Promotion";
import ProductContainer from "@components/Contents/ProductContainer";
import recentViewedItemModel from "@models/RecentViewedItemModel";
import pickedItemModel from "@models/PickedItemModel";
import { fetchData } from "@utils/apiUtils";
import Suggestion from "@components/Contents/Suggestion";

const PRODUCT_GROUP_LIST_DATA_URL = "http://localhost:3000/productGroups.json";

const PRIVATE_ITEM_TYPE = {
  PICKED: "picked",
  RECENT_VIEWED: "recentViewed",
};

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
    new Suggestion($container);
  }

  setEvent() {
    this.addEvent("click", ".container", this.handelMouseclick.bind(this));
  }

  handelMouseclick(e) {
    const { target } = e;
    if (target.classList.contains("product__pick-btn")) {
      this.updatePrivateItem(target);
    } else if (target.closest(".product__item")) {
      this.addPrivateItem({ target, type: PRIVATE_ITEM_TYPE.RECENT_VIEWED });
    }
  }

  updatePrivateItem(target) {
    if (target.classList.contains("pick-btn-activated")) {
      this.removePrivateItem({ target, type: PRIVATE_ITEM_TYPE.PICKED });
    } else {
      this.addPrivateItem({ target, type: PRIVATE_ITEM_TYPE.PICKED });
    }
  }

  removePrivateItem({ target, type }) {
    try {
      const productItem = this.getProductItem(target);
      switch (type) {
        case PRIVATE_ITEM_TYPE.PICKED:
          target.classList.remove("pick-btn-activated");
          pickedItemModel.removeItem(productItem);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }

  addPrivateItem({ target, type }) {
    try {
      const productItem = this.getProductItem(target);
      switch (type) {
        case PRIVATE_ITEM_TYPE.PICKED:
          target.classList.add("pick-btn-activated");
          pickedItemModel.addItem(productItem);
          break;
        case PRIVATE_ITEM_TYPE.RECENT_VIEWED:
          recentViewedItemModel.addItem(productItem);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }

  getProductItem(target) {
    const productContainerIdx = target.closest(".product-group").dataset.idx;
    const productItemIdx = target.closest(".product__item").dataset.idx;
    return this.#productGroupList[productContainerIdx].products[productItemIdx];
  }
}

export default Contents;
