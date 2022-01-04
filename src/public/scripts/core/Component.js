export class Component {
  $target;
  $state;
  $props;
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setUp();
    this.setEvent();
    this.render();
  }

  setUp() {}

  template() {
    return "";
  }
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
    this.mounted();
  }
  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  mounted() {} // render 이후 로직 처리
}
