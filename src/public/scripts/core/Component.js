export class Component {
  $target;
  $state;
  $props;
  constructor($target, $props = {}) {
    this.$target = $target;
    this.$props = $props;
    this.setUp();
    this.#render();
  }

  setUp() {}

  template() {
    return "";
  }
  #render() {
    this.$target.innerHTML = this.template();
    this.mounted();
    this.setEvent();
  }
  setEvent() {}
  removeEvent() {}
  setState(newState) {
    this.removeEvent();
    this.$state = { ...this.$state, ...newState };
    this.#render();
  }
  mounted() {} // render 이후 로직 처리
}
