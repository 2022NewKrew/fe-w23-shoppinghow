export class SearchInputModel {
    constructor() {
        // TODO: 0번째 list가 맨마지막에 한 번 더 들어와야 한다. 처음 데이터를 받을 때 그런식으로 받을 지 해당 컴포넌트에서 이를 수행할 지에 대한 확인 필요.
        this.realTimeSearchRankings = [
            "첫번째 아이템",
            "두번째 아이템",
            "세번째 아이템",
            "네번째 아이템",
            "다섯번째 아이템",
            "여섯번째 아이템",
            "일곱번째 아이템",
            "여덜번째 아이템",
            "아홉번째 아이템",
            "열번째 아이템",
            "첫번째 아이템",
        ];
    }

    getRealTimeSearchRankings() {
        return this.realTimeSearchRankings;
    }

    // TODO: 서버 통신을 통해 실시간 검색 순위 세팅
    setRealTimeSearchRankings() {}
}
