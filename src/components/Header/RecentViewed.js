import Component from "@core/Component";
import RecentItemModel from "@models/RecentItemModel";

class RecentViewed extends Component {
  recentItemModel;

  setup() {
    this.recentItemModel = RecentItemModel;
    this.state = {
      recentViewedItems: [],
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
            <div class="recent-items__products-wrapper">${recentViewedItems
              .map((item) => "<img src=" + item.img + ">")
              .join("")}</div>
        </div>
    `;
  }

  mounted() {
    this.recentItemModel.subscribe(this.observeDataUpdate.bind(this));
  }

  observeDataUpdate(recentViewedItems) {
    this.setState({ ...this.state, recentViewedItems });
  }
}

export default RecentViewed;
