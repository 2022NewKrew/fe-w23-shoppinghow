export default class Store {
  #state = {};
  #listeners = [];
  #reducer; //

  constructor(state, reducer) {
    this.#state = state; // 관제할 state
    this.#reducer = reducer; // 액션 발생시 변화를 일으키는 함수
  }

  getState() {
    return { ...this.#state };
  }

  // 구독 등록!. (setState 등록!)
  subscribe(func) {
    this.#listeners.push(func);
  }

  // 구독하고 있는 컴포넌트가 넘겨준 함수들을 쫙 실행시켜준다. (보통 해당 컴포넌트의 setState)
  publish() {
    this.#listeners.forEach(func => func());
  }

  async dispatch({ actionKey, ...payload }) {
    this.#state = await this.#reducer(this.#state, { actionKey, ...payload });
    this.publish();
  }
}
