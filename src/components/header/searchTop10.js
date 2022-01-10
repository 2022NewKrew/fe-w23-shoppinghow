// fetch되어온 데이터라 가정
const dummyData = [
    '엔진 코팅제',
    '벽선반',
    '키즈가방',
    '마스크가드',
    '대한민국 지도',
    '염색약',
    '부츠',
    '로봇청소기',
    '화분',
    '콩나물',
];

// TODO: parent 없도록 리팩토링하기
export const searchTop10 = (parent) => {
    const target = parent.querySelector('.search-top10__window');

    const render = () => {
        // return target;
    };

    // TODO: headerInnerHTML을 다 js파일로 변환 후에는 return render()
    render();
};
