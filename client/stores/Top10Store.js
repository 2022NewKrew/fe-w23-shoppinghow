import { Store } from '@core';
import { API } from '@services';

const initState = { list: [] };

export const Top10Store = new Store(initState, async (state, { actionKey }) => {
  switch (actionKey) {
    case 'FETCH':
      const { data } = await API.getTop10List();
      return { ...state, list: data || [] };
    default:
      return { ...state };
  }
});
