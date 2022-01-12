import { readJsonData } from "../utils/helper.js";

const ROLLKEYWORD = "rollkeyword";
const SUGGESTION = "suggestion";
const NAVIGATOR = "navigator";
const MARTICLE = "marticle";
const HOTDEAL = "hotdeal";
const HOTKEYWORD = "hotkeyword";

export default class Service {
  static getRollKeyword() {
    return readJsonData(ROLLKEYWORD);
  }
  static getSuggestion() {
    return readJsonData(SUGGESTION);
  }
  static getNavigator() {
    return readJsonData(NAVIGATOR);
  }
  static getMArticle() {
    return readJsonData(MARTICLE);
  }
  static getHotDeal() {
    return readJsonData(HOTDEAL);
  }
  static getHotKeyword() {
    return readJsonData(HOTKEYWORD);
  }
}
