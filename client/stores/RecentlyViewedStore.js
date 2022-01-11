import { Store } from '@core';
import { getSessionStorageItem, setSessionStorageItem } from '@utils';

const storageKey = 'RecentlyViewedList';
const initState = { list: getSessionStorageItem(storageKey) || [] };

/**
 * @actionKey `view`
 * @item { title: string, img: string, url: string }
 */
export const RecentlyViewedStore = new Store(initState, async (state, { actionKey, item }) => {
  const { list } = state;

  switch (actionKey) {
    case 'view':
      const newList = [item, ...list.filter(({ title }) => title !== item.title)];

      setSessionStorageItem(storageKey, newList);
      return { ...state, list: newList };
    default:
      return { ...state };
  }
});
