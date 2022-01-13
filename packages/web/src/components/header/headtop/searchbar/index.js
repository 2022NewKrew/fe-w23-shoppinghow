import FrmShwSearch from "src/components/header/headtop/searchbar/frm-shwsearch";
import RollKeyword from "src/components/header/headtop/searchbar/rollkeywords";
import Suggestion from "src/components/header/headtop/searchbar/Suggestion";

import LStorage from "src/utils/localStorage";
import { $, createHTML } from "src/utils/dom";

import "./index.scss";

export default class SearchBar {
  constructor({ $app }) {
    this.$target = createHTML("div", { className: "wrap_shwsearch" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    new FrmShwSearch({ $app: this.$target });
    new RollKeyword({ $app: this.$target });
    new Suggestion({ $app: this.$target });
    this.addEvent();
  }

  addEvent() {
    const inputEl = $(".tf_keyword");
    const frmEl = $(".frm_shwsearch");
    const searchBtn = $(".search_btn");
    const rollkwordEl = $(".wrap_rollkeywords");
    const suggestionEl = $(".wrap_suggestion");

    this.$target.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (inputEl.value === "") {
          inputEl.blur();
          rollkwordEl.style.display = "block";
        }
        frmEl.style.borderColor = "#cecfd1";
        suggestionEl.style.display = "none";
      }, 500);
    });

    inputEl.addEventListener("focus", () => {
      frmEl.style.borderColor = "#f65b3d";
      rollkwordEl.style.display = "none";
      suggestionEl.style.display = "block";
    });

    inputEl.addEventListener("input", () => {
      suggestionEl.style.display = inputEl.value !== "" ? "none" : "block";
    });

    const search = () => {
      console.log("a");
      if (inputEl.value === "") return;
      LStorage.add("rcntkeywords", inputEl.value, 5);
      alert(`${inputEl.value} 검색`);
      inputEl.value = "";
      suggestionEl.dispatchEvent(new CustomEvent("addRcntKeyword"));
    };

    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      search();
    });
    inputEl.addEventListener("keypress", (e) =>
      e.key === "Enter" ? search : null
    );
  }
}
