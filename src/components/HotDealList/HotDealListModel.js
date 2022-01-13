import { getHotDealItems } from "@api";

export class HotDealListModel {
    constructor() {
        this.hotDealList = [];
    }

    async init() {
        this.hotDealList = await getHotDealItems();
    }

    getHotDealList() {
        return this.hotDealList;
    }
}
