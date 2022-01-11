import Component from "@core/Component";

class RecentViewed extends Component {
  template() {
    return `
        <div class="recent-items__wrapper">
            <div class="recent-items__title-wrapper">
                <span class="recent-items__title">최근 본 상품</span>
                <span class="recent-items__count">25</span>
            </div>
            <div class="recent-items__products-wrapper"></div>
        </div>
    `;
  }
}

export default RecentViewed;
