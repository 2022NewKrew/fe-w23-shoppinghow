export class RecentlyViewedProductsController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    render(model, view) {
        const recentlyViewedProductsListDOM = view.createRecentlyViewedProductsList();
        view.setRecentlyViewedProductsList(recentlyViewedProductsListDOM);
    }

    setEvent(view) {}

    mount() {
        this.render(this.model, this.view);
        this.setEvent(this.view);
    }
}
