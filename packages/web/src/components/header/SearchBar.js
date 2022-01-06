import { $, createHTML } from "../../utils/dom";
import RollKeyword from "./RollKeyword";

const sample = [
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

export default class SearchBar {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("div", { className: "wrap_shwsearch" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    const keyword = sample;
    this.$target.innerHTML = `
        <h2 class="screen_out">검색</h2>
        <form class="frm_shwsearch" role="search">
            <input type="text" class="tf_keyword" size="55" />
            <button type="submit">
                <span class="ico_shwgnb ico_shwsearch"></span>
            </button>
        </form>
        `;
    this.createRollKeyword(keyword);
    this.addEvent();
  }

  createRollKeyword(keyword) {
    const El = new RollKeyword({
      $app: $(".wrap_shwsearch"),
      initialState: keyword,
    });
    El.render();
    El.carouselEvent(this.$target, keyword.length, 32, true);
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
      },
      true
    );
    this.$target.addEventListener(
      "blur",
      () => {
        $(".frm_shwsearch").style.borderColor = "#cecfd1";
        $(".list_rollkeywords").style.display = "block";
      },
      true
    );
  }
}
