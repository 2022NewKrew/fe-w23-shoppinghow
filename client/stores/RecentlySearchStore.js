import { Store } from '@core';
import { getSessionStorageItem, getURLParams, setSessionStorageItem } from '@utils';

const storageKey = 'RecentlySearchStore';

const getInitList = () => {
  const { search } = getURLParams();
  if (!search) return getSessionStorageItem(storageKey) || [];
  return saveSearchToList(search);
};

/**
 * @actionKey `search` | `delete`
 * @item string
 */
export const RecentlySearchStore = new Store({ list: getInitList() }, async (state, { actionKey, item }) => {
  const { list } = state;

  switch (actionKey) {
    case 'search':
      return { ...state, list: saveSearchToList(item) };
    case 'delete':
      const deletedList = list.filter((text) => text !== item);
      setSessionStorageItem(storageKey, deletedList);
      return { ...state, list: deletedList };
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
