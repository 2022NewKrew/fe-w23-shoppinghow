import {observable} from './Observer';

export class Store {
  // private으로 지정하여 외부에서는 접근이 안 되도록 한다.
  #state;
  #mutations;
  #actions;
  state = {};

  constructor({state, mutations, actions}) {
    this.#state = observable(state);
    this.#mutations = mutations;
    this.#actions = actions;

    // state를 직접적으로 수정하지 못하도록 다음과 같이 정의한다.
    Object.keys(state).forEach((key) => {
      Object.defineProperty(
          this.state,
          key,
          {get: () => this.#state[key]},
      );
    });
  }

  commit(action, payload) {
    // state는 오직 commit을 통해서 수정 할 수 있다.
    this.#mutations[action](this.#state, payload);
  }


  dispatch(action, payload) {
    // 결과값을 커밋으로 넘길 수 있도록 만듬(state변경은 commit으로만 가능하도록!)
    return this.#actions[action](this.commit.bind(this), payload);
  }
}
