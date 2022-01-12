import ItemModel from "@models/ItemModel";

const RECENT_VIEWED_ITEM_STORAGE_KEY = "recentViewedItems";

class RecentViewedItemModel extends ItemModel {
  constructor() {
    super(RECENT_VIEWED_ITEM_STORAGE_KEY);
  }
}

export default new RecentViewedItemModel();
