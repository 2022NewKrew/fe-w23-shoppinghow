import Component from "@core/Component";
import { recentViewedItemModel, pickedItemModel } from "@models/ItemModel";

class PrivateMenuFloatLayer extends Component {
  setup() {
    this.state = {
      recentViewedItems: recentViewedItemModel.getItems(),
      pickedItems: pickedItemModel.getItems(),
    };
  }

  template() {
    const { recentViewedItems, pickedItems } = this.state;
    return `
        <div class="private-float-layer">
            <div class="private-float-layer__title-btns-wrapper">
                <div class="private-items__title-wrapper recent-items__title-wrapper">
                    <span class="recent-items__title">최근 본 상품</span>
                    <span class="recent-items__count">${
                      recentViewedItems.length
                    }</span>
                </div>
                <div class="private-items__title-wrapper picked-items__title-wrapper">
                    <span class="picked-items__title">찜한 상품</span>
                    <span class="picked-items__count">${
                      pickedItems.length
                    }</span>
                </div>
            </div>
            <div class="private-float-layer__contents-wrapper">
                <div class="recent-items__wrapper private-items__wrapper">
                    <div class="private-items__products-list">${recentViewedItems
                      .map((item) => "<img src=" + item.img + ">")
                      .join("")}
                    </div>
                    <button class="recent-items__clear-btn private-items__clear-btn">비우기</button>
                </div>
                <div class="picked-items__wrapper private-items__wrapper" style='visibility: hidden;'>
                    <div class="private-items__products-list">${pickedItems
                      .map((item) => "<img src=" + item.img + ">")
                      .join("")}
                    </div>
                    <button class="picked-items__clear-btn private-items__clear-btn">비우기</button>
                </div>
            </div>
        </div>
    `;
  }

  mounted() {
    recentViewedItemModel.subscribe(
      this.observeRecentViewedItemUpdate.bind(this)
    );
    pickedItemModel.subscribe(this.observePickedItemUpdate.bind(this));
  }

  observeRecentViewedItemUpdate(items) {
    this.setState({ ...this.state, recentViewedItems: items });
  }

  observePickedItemUpdate(items) {
    this.setState({ ...this.state, pickedItems: items });
  }

  setEvent() {
    this.addEvent(
      "click",
      ".private-float-layer",
      this.handleMouseclick.bind(this)
    );
    this.addEvent(
      "mouseover",
      ".private-float-layer",
      this.handleMouseover.bind(this)
    );
  }

  handleMouseover(e) {
    const { target } = e;
    const $titleWrapper = target.closest(".private-items__title-wrapper");
    if ($titleWrapper) {
      this.togglePrivateItemsWrapper($titleWrapper);
    }
  }

  handleMouseclick(e) {
    const { target } = e;
    if (target.classList.contains("picked-items__clear-btn")) {
      pickedItemModel.clearItems();
    } else if (target.classList.contains("recent-items__clear-btn")) {
      recentViewedItemModel.clearItems();
    }
  }

  togglePrivateItemsWrapper(titleWrapper) {
    const $pickedItemsWrapper = this.$target.querySelector(
      ".picked-items__wrapper"
    );
    const $recentItemWrapper = this.$target.querySelector(
      ".recent-items__wrapper"
    );
    if (titleWrapper.classList.contains("recent-items__title-wrapper")) {
      $pickedItemsWrapper.style.visibility = "hidden";
      $recentItemWrapper.style.visibility = "";
    } else {
      $pickedItemsWrapper.style.visibility = "";
      $recentItemWrapper.style.visibility = "hidden";
    }
  }
}

export default PrivateMenuFloatLayer;
