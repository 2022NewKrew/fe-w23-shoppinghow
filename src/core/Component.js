export default class Component {
  $root;
  $props;

  constructor($root, $props = {}) {
    this.$root = $root;
    this.$props = { ...$props };

    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {
    // this.$root.className = '';
  }
  setEvent() {
    this.addEvent('click', 'div', (e) => {});
  }
  addEvent(eventType, selector, callback) {}

  template() {
    return /* html */ `<div></div>`;
  }
  mounted() {
    // 상태 구독
  }
  render() {
    this.$root.innerHTML = this.template();
    this.mounted();
  }
}
