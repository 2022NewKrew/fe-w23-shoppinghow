import Observerable from "@core/Observerable";

class RecentItemModel extends Observerable {
  constructor() {
    super();
    this.recentItems = [];
  }

  addRecentItem(item) {
    if (this.recentItems.indexOf(item) !== -1) return;
    this.recentItems.push(item);
    this.notify(this.recentItems);
  }
}

export default new RecentItemModel();
