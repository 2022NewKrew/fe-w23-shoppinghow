import "./index.scss";

export default class TopHotDeal {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("section", { className: "section_tab" });

    $app.appendChild(this.$target);

    this.render();
  }
  render() {
    this.$target.innerHTML = `
        <div class="tit_info"></div>
        <div class="cont_item"></div>
        `;
  }
}
