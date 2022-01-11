import { observable } from "./core/observer.js";

class Store {
    state;

    constructor(initState) {
        this.state = observable({
            ...initState
        });
    }

    setState(newState) { // 해당하는 키값만 변경
        for (const [key, value] of Object.entries(newState)) {
            if(!this.state[key]) continue;
            this.state[key] = value;
        }
    }
}

export const store = new Store({
    top10: [],
    recentWord: [],
    topMenuList: [],
    keywordList: [],
})