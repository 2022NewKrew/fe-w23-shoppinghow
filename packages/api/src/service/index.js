import { readJsonData } from "../utils/helper.js";

const ROLLKEYWORD = "rollkeyword";
const SUGGESTION = "suggestion";

export default class Service {
  static getRollKeyword() {
    return readJsonData(ROLLKEYWORD);
  }
  static getSuggestion() {
    return readJsonData(SUGGESTION);
  }
}
