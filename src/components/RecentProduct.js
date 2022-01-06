export default class RecentProduct {
  constructor() {
    window.addEventListener("DOMContentLoaded", () => {
      this.showRecentProduct();
    });
  }
  showRecentProduct() {
    const recentProductMenu = document.getElementById("recent-product-menu");
    const recentProductContainer = document.getElementById(
      "recent-product-container"
    );
    recentProductMenu.addEventListener("mouseenter", (e) => {
      recentProductContainer.style.display = "block";
    });

    recentProductContainer.addEventListener("mouseleave", (e) => {
      recentProductContainer.style.display = "none";
    });
  }
  render() {
    return /*html*/ `
            <div id="recent-product-container">
                <div class="recent-product-menu">
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
}
