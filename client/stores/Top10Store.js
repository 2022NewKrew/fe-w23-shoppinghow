import { Store } from '@core';
import { APIService } from '@services';

const initState = { list: [] };

export const Top10Store = new Store(initState, async (state, { actionKey }) => {
  switch (actionKey) {
    case 'FETCH':
      const { data } = await APIService.getTop10List();
      return { ...state, list: data || [] };
    default:
      return { ...state };
  }
});
