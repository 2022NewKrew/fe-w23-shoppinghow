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
        LStorage.add("rcntkeywords", input, 5);
      }
    });
  }
}
