import {Store} from '../core/Store.js';
import {API_URL} from '../util/TemplateGroup';
export const store = new Store({
  state: {
    searchKeywordGroup: [],
  },

  // state의 값은 오직 mutations를 통해서 변경할 수 있다.
  mutations: {
    setsearchKeywordGroup(state, payload) {
      state.searchKeywordGroup = payload;
    },
  },

  actions: {
    sestA(commit, payload) {
      fetch(API_URL.GET_SEARCH_KEYWORD_GROUP)
          .then((res) => res.json())
          .then((res) => {
            commit('setsearchKeywordGroup', res.data);
          });
    },
  },
});
