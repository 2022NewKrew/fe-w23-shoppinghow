import { Store } from '@core';
import { getSessionStorageItem, setSessionStorageItem } from '@utils';

const storageKey = 'RecentlyViewedList';
const initState = { recentlyViewedList: getSessionStorageItem(storageKey) || [] };

/**
 * @actionKey `ADD_VIEW`
 * @state { recentlyViewedList: item[] }
 * @item { title: string, img: string, url: string }
 */
export const RecentlyViewedStore = new Store(initState, async (state, actionKey, { item }) => {
  const { recentlyViewedList } = state;

  switch (actionKey) {
    case 'ADD_VIEW':
      const newList = [item, ...recentlyViewedList.filter(({ title }) => title !== item.title)];

      setSessionStorageItem(storageKey, newList);
      return { ...state, recentlyViewedList: newList };
    default:
      return { ...state };
  }
});
