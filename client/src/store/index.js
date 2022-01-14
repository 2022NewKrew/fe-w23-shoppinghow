import evt from '@/utils/custom-event';
import { api } from '@/api';
import { url } from './api-key';
import { getItemInLocalStroage, setItemInLocalStroage, removeDuplication } from '../utils/local-storage';

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
    searchName: getItemInLocalStroage('searchName'),
    recentlyViewedThings: getItemInLocalStroage('recentlyViewedThings'),
    currChoicedWordIdx: -1,
  };

  constructor() {}

  async load(key, queryString = '') {
    try {
      const res = await api.get(`${url[key]}${queryString}`);
      if (!res.success) throw new Error(res.message);
      const newObject = { [key]: res.result };
      this.setState(newObject, key);
    } catch (e) {
      console.error(e);
    }
  }

  addToLocalStorage(data, key, limit) {
    removeDuplication(data, this.state[key], key);
    setItemInLocalStroage(key, data, limit);
    const newObject = { [key]: getItemInLocalStroage(key) };
    this.setState(newObject, key);
  }

  setState(newState, key) {
    this.state = { ...this.state, ...newState };
    evt.fire(key, this.state);
  }
}

export default new Store();
