import { Controller } from "@core";

export class HotDealListController extends Controller {
    init() {
        const hotDealList = this.model.getHotDealList().hotDealItems;
        const hotDealListDOM = this.view.createHotDealList(hotDealList);
        this.view.mount({
            parentClassName: "hot-deal-list",
            childNode: hotDealListDOM
        });
    }

    setEvent() {}
}
