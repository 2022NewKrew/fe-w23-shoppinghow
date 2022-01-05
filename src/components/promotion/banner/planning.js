import { buttonConsole } from '../../carousel/buttonConsole';
import { carousel } from '../../carousel/carousel';
import { imageContainer } from '../../carousel/imageContainer';

// fetch되어온 데이터라 가정
const dummyData = [
    'https://shop3.daumcdn.net/shophow/sib/0_211220170158_owNwlIYMPjCOmpLzLBZpBGQkATLoNNWG',
    'https://shop3.daumcdn.net/shophow/sib/0_211220170214_KnBppOYCunaKIzTENvoRdzZivpnaGYdc',
    'https://shop2.daumcdn.net/shophow/sib/0_211220170154_lPdfLnRSayayFBdHisdeeCypQQWWgaeu',
];

const makePlanningCarousel = (cellData) => {
    const CELL_WIDTH = 485;
    const CELL_HEIGHT = 340;

    const container = imageContainer({ imgWidth: CELL_WIDTH, imgHeight: CELL_HEIGHT, imgSrcs: cellData });
    const buttons = buttonConsole({ dataCount: cellData.length });

    const planningCarousel = carousel({
        cell_width: CELL_WIDTH,
        cell_height: CELL_HEIGHT,
        container,
        buttons,
        dataLength: cellData.length,
    });
    planningCarousel.classList.add('planning__carousel');

    return planningCarousel;
};

export const planning = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'planning';
        const planningCarousel = makePlanningCarousel(dummyData);
        target.appendChild(planningCarousel);

        return target;
    };

    return render();
};
