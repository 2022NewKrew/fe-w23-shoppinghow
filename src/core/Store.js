//refer https://minemanemo.tistory.com/115

export default class Store {
  #state = {};
  #listeners = [];
  #reducer;

  /**
   * @reducer 액션을 수행하고 새로운 state를 반환한다. dispatch를 통해 원하는 액션을 수행할 수 있다.
   *
   ```js
const reducer = (state, { actionKey, payload = {} }) => {
  switch (actionKey) {
    case "ACTION_TEST":
      console.log(payload);
      return { ...state };
    default:
      return { ...state };
  }
};
   ```
   */
  constructor(state, reducer) {
    this.#state = state;
    this.#reducer = reducer;
  }

  getState() {
    return { ...state };
  }

  subscribe(func) {
    this.#listeners.push(func);
  }

  publish() {
    this.#listeners.forEach((func) => func());
  }

  dispatch({ actionKey, payload = {} }) {
    this.#state = this.#reducer(this.#state, { actionKey, ...payload });
    this.publish();
  }
}
