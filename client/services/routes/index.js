import { onFetch } from '../onFetch';

export const getHotDealProductList = async () => {
  const data = await onFetch({
    url: '/products/hot-deal',
    method: 'GET',
  });
  return data;
};

export const getThemeProductList = async () => {
  const data = await onFetch({
    url: '/products/theme',
    method: 'GET',
  });
  return data;
};

export const getTop10List = async () => {
  const data = await onFetch({
    url: '/top-10',
    method: 'GET',
  });
  return data;
};

export const getSliderImages = async () => {
  const data = await onFetch({
    url: '/slider-images',
    method: 'GET',
  });
  return data;
};
