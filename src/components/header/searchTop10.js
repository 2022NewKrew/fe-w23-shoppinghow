import { verticalRolling } from '../verticalRolling/verticalRolling';

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

export const searchTop10 = () => {
    return verticalRolling(dummyData);
};
