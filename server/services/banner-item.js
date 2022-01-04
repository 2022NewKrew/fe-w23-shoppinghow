import { BannerItem } from '../database/index.js';

const getBannerItems = async () => {
  try {
    const result = await BannerItem.find();
    return result;
  } catch (e) {
    throw e;
  }
};

export const BannerItemService = { getBannerItems };
