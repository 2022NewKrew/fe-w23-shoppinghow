import { json2query } from '@utils';
import { onFetch } from './onFetch';

/**
 * @param {{ page: number, per_page: number }?} params
 * @returns
 */
export const getHotDealProductList = async (params) => {
  const res = await onFetch({
    url: `/products/hot-deal` + json2query(params),
    method: 'GET',
  });
  return res;
};

export const getThemeProductList = async () => {
  const res = await onFetch({
    url: '/products/theme',
    method: 'GET',
  });
  return res;
};

export const getTopPopularList = async () => {
  const res = await onFetch({
    url: '/top-popular',
    method: 'GET',
  });
  return res;
};

export const getSliderImages = async () => {
  const res = await onFetch({
    url: '/slider-images',
    method: 'GET',
  });
  return res;
};
