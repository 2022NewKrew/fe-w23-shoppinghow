import { observable } from "./core/observer.js";

class Store {
    state;

    constructor(initState) {
        this.state = observable({
            ...initState
        })
    }

    setState(newState) { // 해당하는 키값만 변경
        for (const [key, value] of Objects.entries(newState)) {
            if(!this.state[key]) continue;
            this.state[key] = value;
        }
    }
}

export const store = new store({
    top10: [],
    recentWord: [],
})