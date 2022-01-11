import { Store } from '@core';
import { getSessionStorageItem, getURLParams, setSessionStorageItem } from '@utils';

const storageKey = 'RecentlySearchStore';

const getInitList = () => {
  const localList = getSessionStorageItem(storageKey) || [];

  const { search } = getURLParams();
  if (!search) return localList;
  return [search, ...localList.filter((text) => text !== search)];
};

/**
 * @actionKey `search` | `delete`
 * @item string
 */
export const RecentlySearchStore = new Store({ list: getInitList() }, async (state, { actionKey, item }) => {
  const { list } = state;

  switch (actionKey) {
    case 'search':
      const searchedList = [item, ...list.filter((text) => text !== item)];
      setSessionStorageItem(storageKey, searchedList);
      return { ...state, list: searchedList };
    case 'delete':
      const deletedList = list.filter((text) => text !== item);
      setSessionStorageItem(storageKey, deletedList);
      return { ...state, list: deletedList };
    default:
      return { ...state };
  }
});
