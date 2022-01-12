import { Store } from '@core';
import { getSessionStorageItem, getURLParams, setSessionStorageItem } from '@utils';

const storageKey = 'RecentlySearchStore';

const getInitrecentlySearchList = () => {
  const { search } = getURLParams();
  if (!search) return getSessionStorageItem(storageKey) || [];
  return saveSearchToList(search);
};

const recentlySearchInitState = { recentlySearchList: getInitrecentlySearchList() };

/**
 * @actionKey `ADD_SEARCH` | `DELETE_SEARCH`
 * @state { recentlySearchList: string[] }
 * @item string
 */
export const RecentlySearchStore = new Store(recentlySearchInitState, async (state, actionKey, { item }) => {
  const { recentlySearchList } = state;

  switch (actionKey) {
    case 'ADD_SEARCH':
      return { ...state, recentlySearchList: saveSearchToList(item) };
    case 'DELETE_SEARCH':
      const deletedList = recentlySearchList.filter((text) => text !== item);
      setSessionStorageItem(storageKey, deletedList);
      return { ...state, recentlySearchList: deletedList };
    default:
      return { ...state };
  }
});

/**
 *
 * @returns
 */
function saveSearchToList(search) {
  const localList = getSessionStorageItem(storageKey) || [];
  const newList = [search, ...localList.filter((text) => text !== search)];
  setSessionStorageItem(storageKey, newList);
  return newList;
}
