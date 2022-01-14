class Component {
  static componentId = 0;

  #componentId;
  $target;
  props;
  state;

  constructor($target, props = {}) {
    this.#componentId = Component.generateComponentId();
    this.$target = $target;
    this.props = props; // props 할당
    this.setup();
    this.render();
    this.setEvent();
  }

  static generateComponentId() {
    return `component-${this.componentId++}`;
  }

  setup() {}

  // 자식 컴포넌트를 마운트
  mounted() {}

  template() {
    return "";
  }

  /*
   리렌더링을 고려하여, 이미 동일한 id를 가진 엘리먼트가 $target 내부에 있을 경우
   해당 엘리먼트를 새로운 엘리먼트로 replace하도록 추가.
   */
  render() {
    const $temp = document.createElement("div");
    $temp.innerHTML = this.template();
    const $element = $temp.firstElementChild;
    $element.classList.add(this.#componentId);
    const $prevElement = this.$target.querySelector(`.${this.#componentId}`);
    if ($prevElement) {
      this.$target.replaceChild($element, $prevElement);
    } else {
      this.$target.appendChild($element);
    }

    this.mounted(); // render 후에 mounted가 실행 된다.
  }

  // 이벤트 적용
  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback, options = {}) {
    const children = [...this.$target.querySelectorAll(selector)];
    // selector에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
    // closest를 이용하여 처리한다.
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);
    this.$target.addEventListener(
      eventType,
      (event) => {
        if (!isTarget(event.target)) return false;
        callback(event);
      },
      options
    );
  }
}

export default Component;
