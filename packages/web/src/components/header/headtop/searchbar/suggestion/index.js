import Service from "src/service";

import LStorage from "src/utils/localStorage";
import { $, createHTML } from "src/utils/dom";

import "./index.scss";

export default class Suggestion {
  constructor({ $app }) {
    this.state = {};
    this.$target = createHTML("div", { className: "wrap_suggestion" });
    this.$target.style.display = "none";
    $app.appendChild(this.$target);

    this.render();
    this.dataFetch();
    this.addEvent();
  }
  async dataFetch() {
    const {
      isError,
      data: { suggestion: kwordList },
    } = await Service.getSuggestion();
    this.setState({ kwordList });
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    const { kwordList } = this.state;

    this.$target.innerHTML = `
        <div class="inner_suggestion">
            <div class="rcnt">
                <strong class="tit_suggestion">최근 검색어</strong>
                <ol class="list_keyword" id="rcnt">
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
    this.createListRcnt();
  }
  createListRcnt() {
    const rcntList = LStorage.get("rcntkeywords");
    const El = $(".rcnt .list_keyword");
    El.innerHTML = rcntList
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
  addEvent() {
    this.$target.addEventListener("click", (e) => {
      if (e.target.className !== "ico_remove") return;
      const El = e.target.closest(".keyword");
      LStorage.delete("rcntkeywords", El.innerText);
      this.createListRcnt();
    });

    this.$target.addEventListener("addRcntKeyword", () => {
      this.createListRcnt();
    });
  }
}
