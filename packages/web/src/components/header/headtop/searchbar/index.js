import FrmShwSearch from "src/components/header/headtop/searchbar/frm-shwsearch";
import RollKeyword from "src/components/header/headtop/searchbar/rollkeywords";
import Suggestion from "src/components/header/headtop/searchbar/Suggestion";

import { $, createHTML } from "src/utils/dom";
import { addRcntKeywords, getRcntKeywords } from "src/utils/localStorage";

import "./index.scss";

const rollkeywordsdata = [
  "엔진코딩제",
  "벽선반",
  "키즈가방",
  "마스크가드",
  "대한민국지도",
  "염색약",
  "부츠",
  "로봇청소기",
  "화분",
  "콩나물",
];

const suggestiondata = [
  "호빵찜기",
  "키보드",
  "참기름",
  "캠핑용품",
  "김치",
  "곤약젤리",
  "화장품선물세트",
  "대추",
  "빨대컵",
  "핸드크림",
];

export default class SearchBar {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("div", { className: "wrap_shwsearch" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    new FrmShwSearch({ $app: this.$target });
    new RollKeyword({ $app: this.$target, initialState: rollkeywordsdata });
    new Suggestion({
      $app: this.$target,
      initialState: {
        rcntList: getRcntKeywords(),
        kwordList: suggestiondata,
      },
    });
    this.addEvent();
  }

  addEvent() {
    this.$target.addEventListener("click", () => {
      this.$target.focus();
    });

    this.$target.addEventListener(
      "focus",
      () => {
        $(".frm_shwsearch").style.borderColor = "#f65b3d";
        $(".list_rollkeywords").style.display = "none";
        $(".wrap_suggestion").style.display = "block";
      },
      true
    );
    this.$target.addEventListener(
      "blur", //mouseleave
      () => {
        $(".frm_shwsearch").style.borderColor = "#cecfd1";
        $(".list_rollkeywords").style.display = "block";
        $(".wrap_suggestion").style.display = "none";
        // input.blur()
      },
      true
    );
    $(".tf_keyword").addEventListener("input", (e) => {
      $(".wrap_suggestion").style.display =
        e.target.value !== "" ? "none" : "block";
    });
    $(".frm_shwsearch button").addEventListener("click", (e) => {
      e.preventDefault();
      const input = $(".tf_keyword").value;
      if (input !== "") {
        addRcntKeywords(input);
      }
    });
  }
}
