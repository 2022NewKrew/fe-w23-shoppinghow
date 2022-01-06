import { htmlToElement } from '@utils';

export default class Component {
  /**
   * @param {HTMLElement} $target
   */
  $target;
  props;

  /**
   * @param {HTMLElement} $target 타겟 기준으로 컴포넌트를 삽입합니다.
   * @param { { renderType: "innerHTML" | "outerHTML" | "beforebegin" | "afterbegin" | "beforeend" | "afterend" } } props
   *
   * outerHTML은 내부적으로 `replaceWith`로 구현되어 있습니다.
   * insertAdjacentHTML의 position 참고하세요. https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
   */
  constructor($target, props = {}) {
    this.$target = $target;
    this.props = { renderType: 'innerHTML', ...props };

    this.setup();
    this.render();
    this.setEvent();
  }

  setup() {}

  setEvent() {}
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
      const element = htmlToElement(this.template());
      // this.$target.replaceWith(element);
      this.$target.className = element.className;
      this.$target.innerHTML = element.innerHTML;
    } else {
      this.$target.insertAdjacentHTML(renderType, this.template());
    }

    this.mounted();
  }
}
