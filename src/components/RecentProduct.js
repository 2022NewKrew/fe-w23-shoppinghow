import Component from "../core/Component.js";
import RecentProductModel from "../models/RecentProductModel.js";
import RecentProductItem from "./RecentProductItem.js";

export default class RecentProduct extends Component {
  setup() {
    this.$state = {
      recentProducts: RecentProductModel.getRecentProducts(),
    };
  }

  template() {
    const { recentProducts } = this.$state;
    return `
      <div id="recent-product-container">
        <div id="recent-product-menu">
            <div id="recent-products">
                최근 본 상품 ${recentProducts.length}
            </div>
            <div id="liked-products">
                내가 찜한 상품 0
            </div>
        </div>
        <div class="recent-product-items-container">
          <div class="recent-product-items">
              ${recentProducts
                .map(
                  ({ img }) => `
                    <img class = "recent-product-item" src=${img}>
                 `
                )
                .join("")}
          </div>
        </div>
      </div>
    `;
  }

  mounted() {
    RecentProductModel.subscribe(this.observeRecentProductsUpdate.bind(this));
    // const { recentProducts } = this.$state;
    // const $items = this.$element.querySelector(".recent-product-items");
    // recentProducts.map((product) => {
    //   new RecentProductItem($items, product);
    // });
  }

  setEvent() {
    const recentProductMenu = "#recent-product-btn";
    const recentProductContainer = "#recent-product-container";

    this.addEvent(
      "mouseenter",
      recentProductMenu,
      (e) => {
        const $recentProductContainer = document.querySelector(
          "#recent-product-container"
        );
        $recentProductContainer.style.display = "block";
      },
      true
    );

    this.addEvent(
      "mouseleave",
      recentProductContainer,
      (e) => {
        const $recentProductContainer = document.querySelector(
          "#recent-product-container"
        );
        $recentProductContainer.style.display = "none";
      },
      true
    );
  }

  observeRecentProductsUpdate(recentProducts) {
    this.setState({ ...this.$state, ...recentProducts });
  }
}
