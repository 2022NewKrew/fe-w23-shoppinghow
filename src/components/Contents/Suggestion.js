import Component from "@core/Component";
import recentViewedItemModel from "@models/RecentViewedItemModel";
import SuggestionRecentItem from "@components/Contents/SuggestionRecentItem";
import { fetchData } from "@utils/apiUtils";
import ProductItem from "@components/Contents/ProductItem";

const RECENT_ITEMS_TOTAL_COUNT_LOW_LIMIT = 10;
const RECENT_ITEMS_UI_COUNT = 5;
const RECENT_ITEM_WIDTH = 254;
const SUGGESTION_ITEMS_LIST_DATA_URL =
  "http://localhost:3000/suggestionItems.json";

class Suggestion extends Component {
  setup() {
    this.state = { recentViewedItems: recentViewedItemModel.getItems() };
  }

  template() {
    return `
        <div class="suggestion product-group">
            <h2 class="section-title">이 상품 어때요?</h2>
            <ul class="suggestion__recent-item-list" data-transform = "0"></ul>
            <ul class="suggestion__recommend_item_list product-list"></ul>
            <button class="suggestion__move-recent-item-btn suggestion__move-recent-item-list-left-wrapper">
                <div class="suggestion__move-recent-item-list-left"></div>
            </button>
            <button class="suggestion__move-recent-item-btn suggestion__move-recent-item-list-right-wrapper"> 
                <div class="suggestion__move-recent-item-list-right"></div>
            </button>
        </div>
    `;
  }

  async mounted() {
    const { recentViewedItems } = this.state;
    const $recentItemList = this.$target.querySelector(
      ".suggestion__recent-item-list"
    );
    const $suggestionRecommendItemsList = this.$target.querySelector(
      ".suggestion__recommend_item_list"
    );
    const tempRecentViewedItems = [
      ...recentViewedItems,
      ...new Array(
        RECENT_ITEMS_TOTAL_COUNT_LOW_LIMIT - recentViewedItems.length
      ),
    ];
    tempRecentViewedItems.map((item) => {
      new SuggestionRecentItem($recentItemList, item);
    });
    recentViewedItemModel.subscribe(
      this.observeRecentViewedItemUpdate.bind(this)
    );

    const suggestionProductsList = await fetchData(
      SUGGESTION_ITEMS_LIST_DATA_URL
    );
    suggestionProductsList.map(
      (product, idx) =>
        new ProductItem($suggestionRecommendItemsList, { ...product, idx })
    );

    this.activateFirstRecentItem();
  }

  setEvent() {
    this.addEvent("click", ".suggestion", this.handleMouseclick.bind(this));
  }

  handleMouseclick(e) {
    const { target } = e;
    if (target.closest(".suggestion__recent-item")) {
      this.toggleActivatedItem(target);
    } else if (target.closest(".suggestion__move-recent-item-btn")) {
      this.handleMoveEventForRecentItemList(target);
    }
  }

  activateFirstRecentItem() {
    const $recentItemList = this.$target.querySelector(
      ".suggestion__recent-item-list"
    );
    $recentItemList.firstElementChild.classList.add("suggestion__activated");
  }

  toggleActivatedItem(target) {
    const $currentActivatedItem = this.$target.querySelector(
      ".suggestion__activated"
    );
    const $nextActivatedItem = target.closest(".suggestion__recent-item");
    $currentActivatedItem.classList.remove("suggestion__activated");
    $nextActivatedItem.classList.add("suggestion__activated");
  }

  handleMoveEventForRecentItemList(target) {
    const $recentItemList = this.$target.querySelector(
      ".suggestion__recent-item-list"
    );
    const curTransformPx = parseInt($recentItemList.dataset.transform);
    if (target.closest(".suggestion__move-recent-item-list-left-wrapper")) {
      const newTransformPx = this.calculateTransformPx(curTransformPx, true);
      this.moveRecentItemList($recentItemList, newTransformPx);
    } else {
      const newTransformPx = this.calculateTransformPx(
        curTransformPx,
        false,
        $recentItemList.children.length
      );
      this.moveRecentItemList($recentItemList, newTransformPx);
    }
  }

  moveRecentItemList($recentItemList, px) {
    $recentItemList.style.transform = `translateX(-${px}px)`;
    $recentItemList.dataset.transform = `${px}`;
  }

  calculateTransformPx(curTransformPx, isLeft, recentItemListLength) {
    if (isLeft) {
      return curTransformPx - RECENT_ITEM_WIDTH >= 0
        ? curTransformPx - RECENT_ITEM_WIDTH
        : curTransformPx;
    } else {
      return curTransformPx + RECENT_ITEM_WIDTH <=
        RECENT_ITEM_WIDTH * (recentItemListLength - RECENT_ITEMS_UI_COUNT)
        ? curTransformPx + RECENT_ITEM_WIDTH
        : curTransformPx;
    }
  }

  observeRecentViewedItemUpdate(items) {
    this.setState({ ...this.state, recentViewedItems: items });
  }
}

export default Suggestion;
