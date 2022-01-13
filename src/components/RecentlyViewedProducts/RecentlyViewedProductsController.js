import { Controller } from "@core";

export class RecentlyViewedProductsController extends Controller {

    init() {
        const recentlyViewedProductsListDOM = this.view.createRecentlyViewedProducts();
        this.view.mount({ 
            parentClassName: "private-menu__btn.recently_viewed", 
            childNode: recentlyViewedProductsListDOM 
        });
    }

    setEvent() {
        const recentlyViewed = this.view.getDOMByClassName("private-menu__btn.recently_viewed");
        const recentlyViewedList = this.view.getDOMByClassName("rvpv_products_wrap");
        
        recentlyViewed.addEventListener("mouseover", () => {
            show(recentlyViewedList);
        });

        recentlyViewed.addEventListener("mouseout", () => {
            hide(recentlyViewedList);
        });
    }
}
