export default class Component {
  $target;
  $props;

  /**
   * @param $target 타겟 기준으로 컴포넌트를 삽입합니다.
   * @param $props `renderType: "replace"`이면 innerHTML로 삽입, 아니면 insertAdjacentHTML의 position을 입력하세요.
   * https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
   */
  constructor($target, $props = {}) {
    this.$target = $target;
    this.$props = { renderType: 'replace', ...$props };

    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}

  setEvent() {
    this.addEvent('click', 'div', (e) => {});
  }
  addEvent(eventType, selector, callback) {}

  template() {
    return /* html */ `<div></div>`;
  }
  mounted() {}
  render() {
    const { renderType } = this.$props;

    if (renderType === 'replace') this.$target.innerHTML = this.template();
    else this.$target.insertAdjacentHTML(renderType, this.template());

    this.mounted();
  }
}
