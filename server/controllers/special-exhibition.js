import { SpecialExhibitionService } from '../services/special-exhibition.js';
import { error } from '../error/index.js';

const getSpecialExhibition = async (req, res) => {
  try {
    const result = await SpecialExhibitionService.getSpecialExhibition();
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.GET_SPECIAL_EXHIBITION_ERROR });
  }
};

const getMainSpecialExhibition = async (req, res) => {
  try {
    const result = await SpecialExhibitionService.getMainSpecialExhibition();
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.GET_SPECIAL_EXHIBITION_ERROR });
  }
};

export const SpecialExhibitionController = { getSpecialExhibition, getMainSpecialExhibition };
