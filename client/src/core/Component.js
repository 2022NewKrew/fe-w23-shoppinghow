export default class Components {
  $target;
  state;
  constructor(data = {}) {
    this.$target = data.target;
    this.state = data.state;
  }

  render($node) {
    this.$target.appendChild($node);
  }
}