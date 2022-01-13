export default class Observerable {
  #observers;
  constructor() {
    this.#observers = [];
  }

  subscribe(observer) {
    this.#observers.push(observer);
  }

  unsubscribe(observer) {
    this.#observers = this.#observers.filter(
      (_observer) => _observer !== observer
    );
  }

  notify(data) {
    this.#observers.forEach((_observer) => _observer(data));
  }
}
