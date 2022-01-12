import ItemModel from "@models/ItemModel";

const PICKED_ITEM_STORAGE_KEY = "pickedItems";

class PickedItemModel extends ItemModel {
  constructor() {
    super(PICKED_ITEM_STORAGE_KEY);
  }

  isItemPicked(item) {
    return this.items.some((_item) => _item.title === item.title);
  }

  removeItem(item) {
    const newItems = this.items.filter((_item) => _item.title !== item.title);
    this.updateLocalStorage(newItems);
    this.items = this.getLocalStorage();
    this.notify(this.items);
  }
}

export default new PickedItemModel();
