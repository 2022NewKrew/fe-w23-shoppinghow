import { setMVC, mount } from "@utils";
import { SearchInputModel, SearchInputView, SearchInputController } from "@components/SearchInput";
import { RecentlyViewedProductsModel, RecentlyViewedProductsView, RecentlyViewedProductsController } from "@components/RecentlyViewedProducts";

export default class Header {
    constructor(target) {
        this.target = target;
    }

    init() {
        mount(this.target, "#template_header")
        setMVC(SearchInputModel, SearchInputView, SearchInputController);
        setMVC(RecentlyViewedProductsModel, RecentlyViewedProductsView, RecentlyViewedProductsController);
    }

    render() {
        this.init();
    }
}
