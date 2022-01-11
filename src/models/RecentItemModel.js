import Observerable from "@core/Observerable";
import { getLocalStorage, setLocalStorage } from "@utils/localStorageUtils";

const LOCAL_STORAGE_KEY = "recentViewedItems";

class RecentItemModel extends Observerable {
  constructor() {
    super();
    this.recentItems = [];
    this.init();
  }

  addRecentItem(item) {
    if (this.recentItems.indexOf(item) !== -1) return;
    this.recentItems.push(item);
    this.updateLocalStorage();
    this.notify(this.recentItems);
  }

  getRecentItems() {
    return this.recentItems;
  }

  clearRecentItems() {
    this.recentItems = [];
    this.updateLocalStorage();
    this.notify(this.recentItems);
  }

  updateLocalStorage() {
    setLocalStorage({ key: LOCAL_STORAGE_KEY, value: this.recentItems });
  }

  init() {
    const initData = getLocalStorage({ key: LOCAL_STORAGE_KEY });
    this.recentItems = initData || this.recentItems;
  }
}

export default new RecentItemModel();
