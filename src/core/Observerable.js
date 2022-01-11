class Observerable {
  #observerFuncs;
  constructor() {
    this.#observerFuncs = [];
  }
  subscribe(observerFunc) {
    this.#observerFuncs.push(observerFunc);
  }
  unsubscribe(observerFunc) {
    this.#observerFuncs = this.#observerFuncs.filter(
      (_observerFunc) => _observerFunc !== observerFunc
    );
  }
  notify(data) {
    this.#observerFuncs.forEach((_observerFunc) => _observerFunc(data));
  }
}

export default Observerable;
