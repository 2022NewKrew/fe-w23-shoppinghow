import { $ } from "@utils";
import { SearchInputModel, RecentlyViewedProductsModel } from "@components/Model";
import { SearchInputView, RecentlyViewedProductsView } from "@components/View";
import { SearchInputController, RecentlyViewedProductsController } from "@components/Controller";


export default class Header {
    constructor(target) {
        this.target = target;
    }

    render() {
        const header = $("#template_header").content.children[0];
        this.target.appendChild(header.cloneNode(true));

        const searchInputModel = new SearchInputModel();
        const searchInputView = new SearchInputView(searchInputModel);
        const searchInput = new SearchInputController(searchInputModel, searchInputView);
        searchInput.mount();

        const recentlyViewedProductsModel = new RecentlyViewedProductsModel();
        const recentlyViewedProductsView = new RecentlyViewedProductsView(recentlyViewedProductsModel);
        const recentlyViewedProducts = new RecentlyViewedProductsController(recentlyViewedProductsModel, recentlyViewedProductsView)
        recentlyViewedProducts.mount();
    }

    mount() {
        this.render();
    }
}
