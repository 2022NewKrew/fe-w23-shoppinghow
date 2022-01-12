import evt from '@/utils/custom-event';
import { api } from '@/api';
import { url } from './api-key';
import { getItemInLocalStroage } from '../utils/local-storage';

class Store {
  state = {
    promotionList: [],
    hotDealList: [],
    hotItemList: [],
    bannerItemList: [],
    hotItemsName: [],
    menu: [],
    searchName: getItemInLocalStroage('search-name'),
    autoCompleteWords: [],
    searchInput: '',
    currChoiceIdx: -1,
  };

  constructor() {}

  async load(key) {
    try {
      const res = await api.get(url[key]);
      if (!res.success) throw new Error(res.message);
      this.setState({ [key]: res.result }, key);
    } catch (e) {
      console.error(e);
    }
  }

  setState(newState, key) {
    this.state = { ...this.state, ...newState };
    evt.fire(key, this.state);
  }
}

export default new Store();
