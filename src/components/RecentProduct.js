import Component from "../core/Component.js";

export default class RecentProduct extends Component {
  setup() {}

  template() {
    return `
            <div id="recent-product-container">
                <div id="recent-product-menu">
                    <div id="recent-products">
                        최근 본 상품 2
                    </div>
                    <div id="liked-products">
                        내가 찜한 상품 0 
                    </div>
                </div>
                <div class="recent-product-items">
            </div>
        `;
  }

  setEvent() {
    const recentProductMenu = "#recent-product-menu";
    const recentProductContainer = "#recent-product-container";

    const $recentProductContainer = document.getElementById(
      "recent-product-container"
    );
    console.log($recentProductContainer);
    this.addEvent(
      "mouseenter",
      recentProductMenu,
      (e) => {
        $recentProductContainer.style.display = "block";
      },
      true
    );

    this.addEvent(
      "mouseleave",
      recentProductContainer,
      (e) => {
        $recentProductContainer.style.display = "none";
      },
      true
    );
  }
}
