import { Store } from '@core';
import { APIService } from '@services';

const initState = { topPopularList: [] };

/**
 * @actionKey `FETCH_DATA`
 * @state { topPopularList: { rank: number, text: string }[] }
 */
export const TopPopularStore = new Store(initState, async (state, actionKey) => {
  switch (actionKey) {
    case 'FETCH_DATA':
      const { data } = await APIService.getTopPopularList();
      return { ...state, topPopularList: data || [] };
    default:
      return { ...state };
  }
});
