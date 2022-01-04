import { Item } from '../database/index.js';

const getItems = async (req, res) => {
  try {
    const result = await Item.find();
    return result;
  } catch (e) {
    throw e;
  }
};

const getHotItems = async (req, res) => {
  try {
    const startPoint = 0;
    const endPoint = 8;
    const SortedItems = await Item.find().sort({ count: 1 });
    const result = SortedItems.reverse().slice(startPoint, endPoint);
    return result;
  } catch (e) {
    throw e;
  }
};

const getHotItemsName = async (req, res) => {
  try {
    const startPoint = 0;
    const endPoint = 10;
    const SortedItems = await Item.find().sort({ count: 1 });
    const hotItems = SortedItems.reverse().slice(startPoint, endPoint);
    const result = hotItems.map((item) => item.title);
    return result;
  } catch (e) {
    throw e;
  }
};

const getHotDealItems = async (req, res) => {
  try {
    const startPoint = 0;
    const endPoint = 8;
    const items = await Item.find();
    const result = items.filter((item) => item.discount).slice(startPoint, endPoint);
    return result;
  } catch (e) {
    throw e;
  }
};

export const ItemService = { getItems, getHotItems, getHotItemsName, getHotDealItems };
