import { createHTML } from "../../../utils/dom";

const sample = [
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

const rcntSample = [
  "만년필",
  "대리석식탁",
  "석류즙",
  "캡슐커피",
  "황사마스크kf94",
];

export default class Suggestion {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("div", { className: "wrap_suggestion" });
    this.$target.style.display = "none";
    $app.appendChild(this.$target);

    this.render();
  }
  render() {
    this.$target.innerHTML = `
        <div class="inner_suggestion">
            <div class="rcnt">
                <strong class="tit_suggestion">최근 검색어</strong>
                <ol class="list_keyword" id="rcnt">
                    ${this.createListRcnt(rcntSample)}
                </ol>
            </div>
            <div class="pop">
                <strong class="tit_suggestion">인기 쇼핑 키워드</strong>
                <ol class="list_keyword">
                    ${this.createListKeyword(sample, 0, 5)}
                </ol>
                <ol class="list_keyword">
                    ${this.createListKeyword(sample, 5, 10)}
                </ol>
            </div>
            
        </div>
        `;
  }
  createListRcnt(data) {
    return data
      .map(
        (word) =>
          `<li><a href="#" class="keyword">${word}<span class="ico_remove"></span></a></li>`
      )
      .join("");
  }

  createListKeyword(data, start, end) {
    return data
      .slice(start, end)
      .map(
        (word, idx) =>
          `
        <li><a href="#" class="keyword"><span class="num_rank">${
          idx + start + 1
        }</span>${word}</a></li>
        `
      )
      .join("");
  }
}
