import { $ } from "@utils";

export class RecentlyViewedProductsView {
    constructor(model) {
        this.model = model;
    }

    createRecentlyViewedProductsList() {
        return `
            <div class="rvpv_products_wrap">
                <span>TEST</span>
            </div>
        `;
    }

    getDOMByClassName(className) {
        return $(`.${className}`);
    }

    setRecentlyViewedProductsList(childNode) {
        const parentNode = $(".private-menu__btn.recently_viewed");
        parentNode.insertAdjacentHTML("beforeend", childNode);
    }
}
