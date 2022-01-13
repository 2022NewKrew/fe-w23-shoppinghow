import Observable from "../core/Observable";

const LOCAL_STORAGE_KEY = "recentProducts";

class RecentProductModel extends Observable {
  constructor() {
    super();
    this.recentProducts = [];
    this.init();
  }

  getRecentProducts() {
    return this.recentProducts;
  }

  addRecentProduct(item) {
    const existingProduct = this.recentProducts.some(($item) => {
      if ($item.title === item.title) return true;
    });
    if (!existingProduct) {
      this.recentProducts.push(item);
      this.updateLocalStorage();
      this.notify(this.recentProducts);
    }
  }

  updateLocalStorage() {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(this.recentProducts)
    );
  }

  init() {
    const initData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    this.recentProducts = initData || this.recentProducts;
  }
}

export default new RecentProductModel();
