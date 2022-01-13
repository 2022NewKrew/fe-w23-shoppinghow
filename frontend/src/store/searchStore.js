import {Store} from '../core/Store.js';
import {getApi} from '../core/ApiService.js';

const maxSearchKeywordGroupLength = 5;
export const searchKeywordStore = new Store({
  state: {
    recentSearchKeywordGroup: [],
    searchKeywordGroup: [],
  },

  // state의 값은 오직 mutations를 통해서 변경할 수 있다.
  mutations: {
    setRecentSearchKeywordGroup(state, payload) {
      state.recentSearchKeywordGroup = payload;
    },

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

    // TODO: 삭제하거나 인기검색어 중에 몇개 추려서 넣을예정
    // 테스트용으로 최근 검색어 넣어놓음
    initTestRecentSearchKeywordData(store, payload) {
      const dummyRecentSearchKeywordGroup = ['의자', '컴퓨터', '생수', '가습기', '모니터'];
      localStorage.setItem('recentSearchKeywordGroup', JSON.stringify(dummyRecentSearchKeywordGroup));
    },

    setRecentSearchKeywordData(store, payload) {
      const recentSearchKeyworData = localStorage.getItem('recentSearchKeywordGroup');
      if (recentSearchKeyworData!==null) {
        store.commit('setRecentSearchKeywordGroup', JSON.parse(recentSearchKeyworData));
      }
    },

    updatesetRecentSearchKeywordData(store, payload) {
      let recentSearchKeyworData = store.state.recentSearchKeywordGroup;
      if (recentSearchKeyworData.length >= maxSearchKeywordGroupLength) {
        recentSearchKeyworData = recentSearchKeyworData.slice(-(maxSearchKeywordGroupLength-1));
        recentSearchKeyworData.push(payload.keyword);
      } else {
        recentSearchKeyworData = recentSearchKeyworData.slice();
      }
      localStorage.setItem('recentSearchKeywordGroup', JSON.stringify(recentSearchKeyworData));
      store.commit('setRecentSearchKeywordGroup', recentSearchKeyworData);
    },
  },
});
