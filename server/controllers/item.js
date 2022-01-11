import { ItemService } from '../services/item.js';
import { error } from '../error/index.js';

const getItems = async (req, res) => {
  try {
    const result = await ItemService.getItems();
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.GET_ITEM_ERROR });
  }
};

const getHotItems = async (req, res) => {
  try {
    const result = await ItemService.getHotItems();
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.GET_HOT_ITEM_ERROR });
  }
};

const getHotItemsName = async (req, res) => {
  try {
    const result = await ItemService.getHotItemsName();
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.GET_HOT_ITEMS_NAME_ERROR });
  }
};

const getHotDealItems = async (req, res) => {
  try {
    const result = await ItemService.getHotDealItems();
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.GET_HOT_DEAL_ITEMS_ERROR });
  }
};

const getAutocompleteList = async (req, res) => {
  try {
    const result = await ItemService.getAutocompleteList();
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.GET_AUTO_COMPLETE_ERROR });
  }
};

export const ItemController = { getItems, getHotItems, getHotItemsName, getHotDealItems, getAutocompleteList };
