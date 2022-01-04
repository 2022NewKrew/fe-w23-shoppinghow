import { BannerItemService } from '../services/banner-item.js';
import { error } from '../error/index.js';

const getBannerItems = async (req, res) => {
  try {
    const result = await BannerItemService.getBannerItems();
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.GET_BANNER_ITEM_ERROR });
  }
};

export const BannerItemController = { getBannerItems };
