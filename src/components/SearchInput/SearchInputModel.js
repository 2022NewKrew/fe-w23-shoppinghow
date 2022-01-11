import { getSearchRanking } from "@api"

export class SearchInputModel {
    constructor() {
        this.realTimeSearchRankings = [];
    }

    async init() {
        this.realTimeSearchRankings = Object.values(await getSearchRanking());
        this.addFirstListToLast();
    }

    addFirstListToLast() {
        this.realTimeSearchRankings = [
            ...this.realTimeSearchRankings, this.realTimeSearchRankings[0]
        ];
    }

    getRealTimeSearchRankings() {
        return this.realTimeSearchRankings;
    }
}
