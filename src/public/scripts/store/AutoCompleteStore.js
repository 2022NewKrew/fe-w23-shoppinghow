import Store from "@core/Store";

const storageKey = "RecentlyViewedList";
const initState = { query: "" };

const completeStoreReducer = async (state, { actionKey, item }) => {
  switch (actionKey) {
    case "COMPLETE":
      return { ...state, query: item.query };
    default:
      return { ...state };
  }
};
export const AutoCompleteStore = new Store(initState, completeStoreReducer);
