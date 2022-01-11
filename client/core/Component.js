import { htmlToElement } from '@utils';

/**
 * Component에서 상태를 관리하지 않습니다. Store를 통해서 상태를 통한 렌더링을 제어하세요!
 */
export default class Component {
  /**
   * @param {HTMLElement} $target 타겟 기준으로 컴포넌트를 삽입합니다.
   * @param {{ renderType: "innerHTML" | "replaceHTML" | "appendHTML" }} props
   */
  constructor($target, props = {}) {
    /**
     * @param {HTMLElement} $target
     * 렌더링 이후 $target은 해당 컴포넌트의 root를 가리키게 됩니다.
     */
    this.$target = $target;

    /**
     * 넘겨받을 데이터 객체입니다.
     */
    this.props = { renderType: 'innerHTML', ...props };
    this.state = {};

    this.setup();
    this.render();
    this.mounted();
  }

  setup() {}

  /**
   * 렌더링할 html litterial template을 반환합니다.
   */
  template() {
    return /* html */ ``;
  }

  render() {
    const { renderType } = this.props;

    if (renderType === 'innerHTML') {
      this.$target.innerHTML = this.template();
    } else if (renderType === 'replaceHTML') {
      const element = htmlToElement(this.template());
      this.$target.parentNode.replaceChild(element, this.$target);
      this.$target = element;
    } else {
      const element = htmlToElement(this.template());
      this.$target.appendChild(element);
      this.$target = element;
      this.props.renderType = 'replaceHTML'; // 리렌더링할 때는 replace를하게 된다.
    }

    this.rendered();
  }
  /**
   * render이후에 수행되는 동작입니다.
   */
  rendered() {}

  mounted() {}
}
