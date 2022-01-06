import createBanners from "./banners.js";
import createThemes from "./themes.js";
import createHotdeals from "./hotdeals.js";

const themeData = require("../data/themes.json").themes;
const hotdealData = require("../data/hotdeals.json").hotdeals;

export default () => {
  createBanners();
  createThemes(themeData);
  createHotdeals(hotdealData);
};
