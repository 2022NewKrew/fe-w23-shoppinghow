import Component from "@core/Component";
import RecentItemModel from "@models/RecentItemModel";

class RecentViewed extends Component {
  setup() {
    this.state = {
      recentViewedItems: RecentItemModel.getRecentItems(),
    };
  }

  template() {
    const { recentViewedItems } = this.state;
    return `
        <div class="recent-items__wrapper">
            <div class="recent-items__title-wrapper">
                <span class="recent-items__title">최근 본 상품</span>
                <span class="recent-items__count">${
                  recentViewedItems.length
                }</span>
            </div>
            <div class="recent-items__products-wrapper">
                <div class="recent-items__products-list">${recentViewedItems
                  .map((item) => "<img src=" + item.img + ">")
                  .join("")}
                </div>
            </div>
            <button class="recent-items__clear-btn">비우기</button>
        </div>
    `;
  }

  mounted() {
    RecentItemModel.subscribe(this.observeDataUpdate.bind(this));
  }

  setEvent() {
    this.addEvent(
      "click",
      ".recent-items__wrapper",
      this.handleMouseclick.bind(this)
    );
  }

  handleMouseclick(e) {
    const { target } = e;
    if (target.classList.contains("recent-items__clear-btn")) {
      RecentItemModel.clearRecentItems();
    }
  }

  observeDataUpdate(recentViewedItems) {
    this.setState({ ...this.state, recentViewedItems });
  }
}

export default RecentViewed;
