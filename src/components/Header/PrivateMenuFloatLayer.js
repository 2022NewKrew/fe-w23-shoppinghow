import Component from "@core/Component";
import recentViewedItemModel from "@models/RecentViewedItemModel";
import pickedItemModel from "@models/PickedItemModel";
import PrivateItemsContainer from "@components/Header/PrivateItemsContainer";
import PrivateItemsTitleWrapper from "@components/Header/PrivateItemsTitleWrapper";

class PrivateMenuFloatLayer extends Component {
  setup() {
    this.state = {
      recentViewedItems: recentViewedItemModel.getItems(),
      pickedItems: pickedItemModel.getItems(),
    };

    recentViewedItemModel.subscribe(
      this.observeRecentViewedItemUpdate.bind(this)
    );
    pickedItemModel.subscribe(this.observePickedItemUpdate.bind(this));
  }

  template() {
    return `
        <div class="private-float-layer">
            <div class="private-float-layer__title-btns-wrapper"></div>
            <div class="private-float-layer__contents-wrapper"></div>
        </div>
    `;
  }

  mounted() {
    const { recentViewedItems, pickedItems } = this.state;
    const $privateTitleBtnsWrapper = this.$target.querySelector(
      ".private-float-layer__title-btns-wrapper"
    );
    const $privateContentsWrapper = this.$target.querySelector(
      ".private-float-layer__contents-wrapper"
    );

    new PrivateItemsTitleWrapper($privateTitleBtnsWrapper, {
      type: "recent",
      items: recentViewedItems,
    });
    new PrivateItemsContainer($privateContentsWrapper, {
      type: "recent",
      items: recentViewedItems,
      visibility: "",
    });
    new PrivateItemsTitleWrapper($privateTitleBtnsWrapper, {
      type: "picked",
      items: pickedItems,
    });
    new PrivateItemsContainer($privateContentsWrapper, {
      type: "picked",
      items: pickedItems,
      visibility: "hidden",
    });
  }

  observeRecentViewedItemUpdate(items) {
    this.setState({ ...this.state, recentViewedItems: items });
  }

  observePickedItemUpdate(items) {
    this.setState({ ...this.state, pickedItems: items });
  }

  setEvent() {
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
