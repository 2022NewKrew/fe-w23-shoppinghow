import { carousel } from '@components/carousel/carousel';
import { suggestItemContainer } from '@components/suggestion/suggestItemContainer';
import { hoverButtons } from '@components/suggestion/hoverButtons';
import { smallTitle } from '@components/smallTitle';

// fetch되어온 데이터라 가정
const dummyData = [
    {
        title: '토리버치 엘라 라지 토트백',
        imgSrc: '//shop1.daumcdn.net/thumb/R80x80/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FI14995508964.jpg%3Fut%3D20211130225644',
        url: '#',
    },
    {
        title: '토리버치 엘라 라지 토트백',
        imgSrc: '//shop1.daumcdn.net/thumb/R80x80/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FI14995508964.jpg%3Fut%3D20211130225644',
        url: '#',
    },
    {
        title: '토리버치 엘라 라지 토트백',
        imgSrc: '//shop1.daumcdn.net/thumb/R80x80/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FI14995508964.jpg%3Fut%3D20211130225644',
        url: '#',
    },
    {
        title: '토리버치 엘라 라지 토트백',
        imgSrc: '//shop1.daumcdn.net/thumb/R80x80/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FI14995508964.jpg%3Fut%3D20211130225644',
        url: '#',
    },
    {
        title: '토리버치 엘라 라지 토트백',
        imgSrc: '//shop1.daumcdn.net/thumb/R80x80/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FI14995508964.jpg%3Fut%3D20211130225644',
        url: '#',
    },
    {
        title: '토리버치 엘라 라지 토트백',
        imgSrc: '//shop1.daumcdn.net/thumb/R80x80/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FI14995508964.jpg%3Fut%3D20211130225644',
        url: '#',
    },
];

const renderSuggestionCarousel = (cellData) => {
    const ITEMS_IN_A_CELL = 5;
    const ITEM_WIDTH = 254;
    const CELL_WIDTH = ITEM_WIDTH * ITEMS_IN_A_CELL;
    const CELL_HEIGHT = 116;

    const container = suggestItemContainer({
        itemsInaCell: ITEMS_IN_A_CELL,
        itemWidth: ITEM_WIDTH,
        cellWidth: CELL_WIDTH,
        cellHeight: CELL_HEIGHT,
        itemDatas: dummyData,
    });

    const numberOfCells = Math.ceil(cellData.length / ITEMS_IN_A_CELL);
    const suggestionCarousel = carousel({
        cell_width: CELL_WIDTH,
        cell_height: CELL_HEIGHT,
        container,
        buttons: hoverButtons(),
        dataLength: numberOfCells,
    });
    suggestionCarousel.classList.add('suggestion-carousel');

    return suggestionCarousel;
};

export const suggestion = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'suggestion';
        target.appendChild(smallTitle({ title: '이 상품 어때요?' }));
        target.appendChild(renderSuggestionCarousel(dummyData));

        return target;
    };

    return render();
};
