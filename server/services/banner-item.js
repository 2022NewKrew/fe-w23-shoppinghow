import { BannerItem } from '../database/index.js';

const getBannerItems = async () => {
  try {
    const result = await BannerItem.find().sort({ date: 1 });
    return result;
  } catch (e) {
    throw e;
  }
};

export const BannerItemService = { getBannerItems };
