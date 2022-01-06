export default class Component {
  $target;
  props;
  state;

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props; // props 할당
    this.setup();
    this.render();
  }

  setup() {}

  // 자식 컴포넌트를 마운트
  mounted() {}

  template() {
    return "";
  }

  init() {}

  render() {
    this.$target.innerHTML += this.template();
    this.setEvent();
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
