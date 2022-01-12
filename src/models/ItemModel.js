import Observerable from "@core/Observerable";
import { getLocalStorage, setLocalStorage } from "@utils/localStorageUtils";

class ItemModel extends Observerable {
  #localStorageKey;

  constructor(localStorageKey) {
    super();
    this.#localStorageKey = localStorageKey;
    this.items = [];
    this.init();
  }

  addItem(item) {
    if (this.items.some((_item) => _item.title === item.title)) return;
    this.updateLocalStorage([...this.items, item]);
    this.items = this.getLocalStorage();
    this.notify(this.items);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.updateLocalStorage([]);
    this.items = this.getLocalStorage();
    this.notify(this.items);
  }

  updateLocalStorage(data) {
    setLocalStorage({ key: this.#localStorageKey, value: data });
  }

  getLocalStorage() {
    return getLocalStorage({ key: this.#localStorageKey });
  }

  init() {
    const localStorageData = this.getLocalStorage();
    this.items = localStorageData || this.items;
  }
}

export default ItemModel;
