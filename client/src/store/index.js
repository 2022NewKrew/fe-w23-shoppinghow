import evt from '@/utils/custom-event';
import { api } from '@/api';
import { url } from './api-key';
import { getItemInLocalStroage, setItemInLocalStroage, removeItemInLocalStroage } from '../utils/local-storage';
import { removeDulication } from '../utils/helper';

class Store {
  state = {
    promotionList: [],
    hotDealList: [],
    hotItemList: [],
    bannerItemList: [],
    hotItemsName: [],
    menu: [],
    autoCompleteWords: [],
    searchInput: '',
    searchName: getItemInLocalStroage('search-name'),
    recentlyViewedThings: getItemInLocalStroage('recentlyViewedThings'),
  };

  constructor() {}

  async load(key) {
    try {
      const res = await api.get(url[key]);
      if (!res.success) throw new Error(res.message);
      const newObject = { [key]: res.result };
      this.setState(newObject);
      this.notify(key);
    } catch (e) {
      console.error(e);
    }
  }

  addToLocalStorage(data, key, limit) {
    removeDulication(data, this.state[key], key);
    setItemInLocalStroage(key, data, limit);
    const newObject = { [key]: getItemInLocalStroage(key) };
    this.setState(newObject);
    this.notify(key);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  notify(key) {
    evt.fire(key, this.state);
  }
}

export default new Store();
