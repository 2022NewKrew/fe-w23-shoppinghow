import { SpecialExhibition } from '../database/index.js';

const getSpecialExhibition = async () => {
  try {
    const result = await SpecialExhibition.find();
    return result;
  } catch (e) {
    throw e;
  }
};

const getMainSpecialExhibition = async () => {
  try {
    const startPoint = 0;
    const endPoint = 4;
    const SpecialExhibitionItems = await SpecialExhibition.find();
    const result = SpecialExhibitionItems.slice(startPoint, endPoint);
    return result;
  } catch (e) {
    throw e;
  }
};

export const SpecialExhibitionService = { getSpecialExhibition, getMainSpecialExhibition };
