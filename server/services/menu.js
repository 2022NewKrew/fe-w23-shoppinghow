import { Menu } from '../database/index.js';

const getMenus = async () => {
  try {
    const result = await Menu.find().sort({ date: 1 });
    return result;
  } catch (e) {
    throw e;
  }
};

export const MenuService = { getMenus };
