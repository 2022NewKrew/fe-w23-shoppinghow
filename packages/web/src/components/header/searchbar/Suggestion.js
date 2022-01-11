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
            <strong class="tit_suggestion">인기 쇼핑 키워드</strong>
            <ol class="list_keyword">
                ${sample
                  .slice(0, 5)
                  .map(
                    (word, idx) => `
                <li><a href="#" class="keyword"><span class="num_rank">${
                  idx + 1
                }</span>${word}</a></li>
                `
                  )
                  .join("")}
            </ol>
            <ol class="list_keyword">
            ${sample
              .slice(5)
              .map(
                (word, idx) => `
              <li><a href="#" class="keyword"><span class="num_rank">${
                idx + 6
              }</span>${word}</a></li>
              `
              )
              .join("")}</ol>
        </div>
        `;
  }
}
