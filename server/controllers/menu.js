import { MenuService } from '../services/menu.js';
import { error } from '../error/index.js';

const getMenus = async (req, res) => {
  try {
    const result = await MenuService.getMenus();
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.GET_MENU_ERROR });
  }
};

export const MenuController = { getMenus };
