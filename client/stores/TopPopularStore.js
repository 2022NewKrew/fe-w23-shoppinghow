import { Store } from '@core';
import { APIService } from '@services';

const initState = { list: [] };

/**
 * @actionKey `FETCH_DATA`
 */
export const TopPopularStore = new Store(initState, async (state, { actionKey }) => {
  switch (actionKey) {
    case 'FETCH_DATA':
      const { data } = await APIService.getTopPopularList();
      return { ...state, list: data || [] };
    default:
      return { ...state };
  }
});
