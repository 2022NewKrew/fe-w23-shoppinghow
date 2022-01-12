import { readJsonData } from "../utils/helper.js";

const ROLLKEYWORD = "rollkeyword";
const SUGGESTION = "suggestion";
const NAVIGATOR = "navigator";

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
}
