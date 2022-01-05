import { Menu } from '../database/index.js';

const getMenus = async () => {
  try {
    const SortedMenu = await Menu.find().sort({ date: 1 });
    const result = SortedMenu.map((menu) => menu.name);
    return result;
  } catch (e) {
    throw e;
  }
};

export const MenuService = { getMenus };
