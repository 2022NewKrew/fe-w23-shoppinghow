export default class Component {
  /**
   * @param {HTMLElement} $target
   */
  $target;
  props;

  /**
   * @param {HTMLElement} $target 타겟 기준으로 컴포넌트를 삽입합니다.
   * @param props
   * `renderType: "innerHTML" | "outerHTML" | beforebegin | afterbegin | beforeend | afterend`
   * insertAdjacentHTML의 position https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
   */
  constructor($target, props = {}) {
    this.$target = $target;
    this.props = { renderType: 'innerHTML', ...props };

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
    const { renderType } = this.props;

    if (renderType === 'innerHTML') {
      this.$target.innerHTML = this.template();
    } else if (renderType === 'outerHTML') {
      const $parent = this.$target.parentElement;
      this.$target.outerHTML = this.template();
      $parent.querySelector();
      console.log(this.$target);
    } else {
      this.$target.insertAdjacentHTML(renderType, this.template());
    }

    this.mounted();
  }
}
