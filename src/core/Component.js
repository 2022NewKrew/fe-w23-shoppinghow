export default class Component {
  $target;
  $props;
  $element;

  constructor($target, $props = {}, $element) {
    this.$target = $target;
    this.$props = $props; // props 할당
    this.init();
    this.setEvent();
    this.render();
    this.mounted(); // render 후에 mounted가 실행 된다.
  }

  init() {
    this.$element = document.createElement("div");
    this.$element.insertAdjacentHTML("beforeend", this.template());
    this.setup();
  }

  setup() {}

  template() {
    return "";
  }

  // 이벤트 적용
  setEvent() {}

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
  render() {
    this.$target.insertAdjacentHTML("beforeend", this.$element.innerHTML);
    // this.$target.insertAdjacentHTML("beforeend", this.template());
  }

  // 자식 컴포넌트를 마운트 및 렌더링 이후의 처리
  mounted() {}
}
