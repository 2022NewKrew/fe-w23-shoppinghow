import { htmlToElement } from '@utils';

/**
 * Component에서 상태를 관리하지 않습니다. Store를 통해서 상태를 통한 렌더링을 제어하세요!
 */
export default class Component {
  /**
   * @param {HTMLElement} $target
   */
  $target;
  /**
   * 넘겨받을 데이터 객체입니다.
   */
  props;

  /**
   * @param {HTMLElement} $target 타겟 기준으로 컴포넌트를 삽입합니다.
   * @param { { renderType: "innerHTML" | "outerHTML" | "beforebegin" | "afterbegin" | "beforeend" | "afterend" } } props
   *
   * outerHTML은 className과 innerHTML을 복사합니다.
   * insertAdjacentHTML의 position 참고하세요. https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
   */
  constructor($target, props = {}) {
    this.$target = $target;
    this.props = { renderType: 'innerHTML', ...props };

    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}

  /**
   * `$target` 바탕으로 이벤트는 등록합니다.
   */
  setEvent() {}

  /**
   * 렌더링할 html litterial template을 반환합니다.
   */
  template() {
    return /* html */ ``;
  }
  /**
   * render이후에 수행되는 동작입니다.
   */
  mounted() {}
  render() {
    const { renderType } = this.props;

    if (renderType === 'innerHTML') {
      this.$target.innerHTML = this.template();
    } else if (renderType === 'outerHTML') {
      const element = htmlToElement(this.template());
      this.$target.className = element.className;
      this.$target.innerHTML = element.innerHTML;
    } else {
      this.$target.insertAdjacentHTML(renderType, this.template());
    }

    this.mounted();
  }
}
