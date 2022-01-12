import {Store} from '../core/Store.js';
import {getApi} from '../core/ApiService.js';
export const searchKeywordStore = new Store({
  state: {
    searchKeywordGroup: [],
  },

  // state의 값은 오직 mutations를 통해서 변경할 수 있다.
  mutations: {

    setSearchKeywordGroup(state, payload) {
      state.searchKeywordGroup = payload;
    },
  },

  actions: {
    async setSearchKeywordData(store, payload) {
      try {
        const res = await getApi(payload.url);
        if (res == null) {
          return new Error(ERROR_MESSAGE.NODATA);
        }
        store.commit('setSearchKeywordGroup', res.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
