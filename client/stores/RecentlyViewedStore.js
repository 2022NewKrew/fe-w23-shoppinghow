import { Store } from '@core';
import { getSessionStorageItem, setSessionStorageItem } from '@utils';

const storageKey = 'RecentlyViewedList';
const initState = { list: getSessionStorageItem(storageKey) || [] };

/**
 * @actionKey `ADD_VIEW`
 * @item { title: string, img: string, url: string }
 */
export const RecentlyViewedStore = new Store(initState, async (state, { actionKey, item }) => {
  const { list } = state;

  switch (actionKey) {
    case 'ADD_VIEW':
      const newList = [item, ...list.filter(({ title }) => title !== item.title)];

      setSessionStorageItem(storageKey, newList);
      return { ...state, list: newList };
    default:
      return { ...state };
  }
});
