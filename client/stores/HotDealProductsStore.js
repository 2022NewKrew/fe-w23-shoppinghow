import { Store } from '@core';
import { APIService } from '@services';

const DEFAULT_ITEM_CNT_PER_PAGE = 5;
const initState = {
  page: 0,
  per_page: DEFAULT_ITEM_CNT_PER_PAGE,
  total: 0,
  hotDealProductList: [],
  loading: false,
};

/**
 * @actionKey `REQUEST_DATA` | `FETCH_DATA`
 * @state { page: number, per_page: number, total: number, hotDealProductList: { }[] }
 * @page string | undefined
 * @per_page string | undefined
 */
export const HotDealProductsStore = new Store(initState, async (state, actionKey, { page, per_page }) => {
  switch (actionKey) {
    case 'REQUEST_DATA':
      HotDealProductsStore.dispatch('FETCH_DATA', {
        page: page || state.page,
        per_page: per_page || state.per_page,
      });
      return { ...state, loading: true };
    case 'FETCH_DATA':
      const res = await APIService.getHotDealProductList({ page, per_page });
      return {
        ...state,
        page: res.page + 1,
        per_page: res.per_page,
        total: res.total,
        hotDealProductList: res.data || [],
        loading: false,
      };
    default:
      return { ...state };
  }
});
