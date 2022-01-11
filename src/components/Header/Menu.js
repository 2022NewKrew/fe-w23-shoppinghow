import Component from "@core/Component";
import RecentViewed from "@components/Header/RecentViewed";

class Menu extends Component {
  template() {
    return `
        <div class="header-menu">
            <div class="category">
                <button class="category__title"><i class="fas fa-bars"></i>카테고리</button>
                <div class="category__lists-wrapper">
                   <ul class="category-first">
                      <li>1. 카테고리</li>
                      <li>1. 카테고리</li>
                      <li>1. 카테고리</li>
                      <li>1. 카테고리</li>
                  </ul>
                  <ul class="category-second">
                      <li>2. 카테고리</li>
                      <li>2. 카테고리</li>
                      <li>2. 카테고리</li>
                      <li>2. 카테고리</li>
                  </ul>
                  <ul class="category-third">
                      <li>3. 카테고리</li>
                      <li>3. 카테고리</li>
                      <li>3. 카테고리</li>
                      <li>3. 카테고리</li>
                  </ul>
                </div>
            </div>
            <div class="gubun-bar"></div>
            <ul class="top-menu">
                <li class="top-menu__btn"><a href="#">핫딜</a></li>
                <li class="top-menu__btn"><a href="">베스트100</a></li>
                <li class="top-menu__btn"><a href="">할인특가</a></li>
                <li class="top-menu__btn"><a href="">기획전</a></li>
            </ul>
            <ul class="private-menu">
                <li class="private-menu__btn"><a href="#">로그인</a></li>
                <div class="activate-recent-wrapper">
                    <li class="private-menu__btn"><a href="#">최근본상품</a></li>
                </div>
            </ul>
        </div>`;
  }

  mounted() {
    const $activateRecentWrapper = this.$target.querySelector(
      ".activate-recent-wrapper"
    );
    new RecentViewed($activateRecentWrapper);
  }

  setEvent() {
    this.addEvent("mouseover", ".header-menu", this.handleMouseover.bind(this));
    this.addEvent("mouseout", ".header-menu", this.handleMouseout.bind(this));
  }

  handleMouseover(e) {
    const { target } = e;
    if (target.closest(".activate-recent-wrapper")) {
      this.activateRecentWrapper();
    }
  }

  handleMouseout(e) {
    const { toElement } = e;
    if (!toElement?.closest(".activate-recent-wrapper")) {
      this.inactivateRecentWrapper();
    }
  }

  activateRecentWrapper() {
    const $recentItemsWrapper = this.$target.querySelector(
      ".recent-items__wrapper"
    );
    $recentItemsWrapper.style.visibility = "visible";
  }

  inactivateRecentWrapper() {
    const $recentItemsWrapper = this.$target.querySelector(
      ".recent-items__wrapper"
    );
    $recentItemsWrapper.style.visibility = "hidden";
  }
}

export default Menu;
