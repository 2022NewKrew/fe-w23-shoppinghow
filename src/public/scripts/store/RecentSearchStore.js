import Store from "@core/Store";

const initState = { recentSearchList: [] };

const recentStoreReducer = async (state, { actionKey, item }) => {
  switch (actionKey) {
    case "SEARCH":
      return { recentSearchList: item.recentSearchList };
    default:
      return { ...state };
  }
};
export const RecentSearchStore = new Store(initState, recentStoreReducer);
