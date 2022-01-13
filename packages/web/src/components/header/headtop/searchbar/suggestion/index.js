import Service from "src/service";

import LStorage from "src/utils/localStorage";
import { createHTML } from "src/utils/dom";

import "./index.scss";

export default class Suggestion {
  constructor({ $app }) {
    this.state = {};
    this.$target = createHTML("div", { className: "wrap_suggestion" });
    this.$target.style.display = "none";
    $app.appendChild(this.$target);

    this.render();
    this.dataFetch();
  }
  async dataFetch() {
    const {
      isError,
      data: { suggestion: kwordList },
    } = await Service.getSuggestion();
    const rcntList = await LStorage.get("rcntkeywords");
    this.setState({ rcntList, kwordList });
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    const { rcntList, kwordList } = this.state;

    this.$target.innerHTML = `
        <div class="inner_suggestion">
            <div class="rcnt">
                <strong class="tit_suggestion">최근 검색어</strong>
                <ol class="list_keyword" id="rcnt">
                    ${this.createListRcnt(rcntList)}
                </ol>
            </div>
            <div class="pop">
                <strong class="tit_suggestion">인기 쇼핑 키워드</strong>
                <ol class="list_keyword">
                    ${this.createListKeyword(kwordList, 0, 5)}
                </ol>
                <ol class="list_keyword">
                    ${this.createListKeyword(kwordList, 5, 10)}
                </ol>
            </div>
        </div>
        `;
  }
  createListRcnt(data) {
    return data
      ?.map(
        (word) =>
          `<li><a href="javascript:;" class="keyword">${word}<span class="ico_remove"></span></a></li>`
      )
      .join("");
  }

  createListKeyword(data, start, end) {
    return data
      ?.slice(start, end)
      .map(
        (word, idx) =>
          `
        <li><a href="javascript:;" class="keyword"><span class="num_rank">${
          idx + start + 1
        }</span>${word}</a></li>
        `
      )
      .join("");
  }
}
