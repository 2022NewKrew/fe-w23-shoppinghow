import Store from "@core/Store";

const initState = { recentViewList: [], recentSearchList: [] };

const recentViewStoreReducer = async (state, { actionKey, item }) => {
  switch (actionKey) {
    case "VIEW":
      return { recentViewList: item.recentViewList };
    case "SEARCH":
      return { recentSearchList: [...state.recentSearchList, item.recentSearch] };
    default:
      return { ...state };
  }
};
export const RecentViewStore = new Store(initState, recentViewStoreReducer);
