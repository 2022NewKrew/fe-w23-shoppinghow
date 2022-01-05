import { buttonConsole } from './buttonConsole';

const CELL_WIDTH = 485;
const CELL_HEIGHT = 340;
const PREV_DIRECTION = 1;
const NEXT_DIRECTION = -1;

// fetch되어온 데이터라 가정
const dummyData = [
    'https://shop3.daumcdn.net/shophow/sib/0_211220170158_owNwlIYMPjCOmpLzLBZpBGQkATLoNNWG',
    'https://shop3.daumcdn.net/shophow/sib/0_211220170214_KnBppOYCunaKIzTENvoRdzZivpnaGYdc',
    'https://shop2.daumcdn.net/shophow/sib/0_211220170154_lPdfLnRSayayFBdHisdeeCypQQWWgaeu',
];

// TODO: 컴포넌트로 분리
const renderContainer = () => {
    const container = document.createElement('div');
    container.style.width = CELL_WIDTH * (dummyData.length + 2) + 'px';

    dummyData.forEach((imgSrc, i) => {
        const cell = document.createElement('a');
        cell.innerHTML = `
            <img src=${imgSrc} width=${CELL_WIDTH}px height=${CELL_HEIGHT}px>
        `;
        container.appendChild(cell);
    });
    const firstClone = container.firstElementChild.cloneNode(true);
    const lastClone = container.lastElementChild.cloneNode(true);
    container.insertBefore(lastClone, container.firstElementChild);
    container.appendChild(firstClone);
    container.style.transform = `translateX(${-1 * CELL_WIDTH}px)`;
    return container;
};

const makeButtonClickHandler = () => {
    function buttonClickHandler() {}
    buttonClickHandler.prototype.count = -1;
    buttonClickHandler.prototype.getClickHandler = (container, direction, dataCount) => {
        return () => {
            buttonClickHandler.prototype.count += direction;
            container.style.transform = `translateX(${buttonClickHandler.prototype.count * CELL_WIDTH}px)`;
            container.style.transitionDuration = '300ms';
            console.log('after move', buttonClickHandler.prototype.count);

            container.ontransitionend = () => {
                container.style.transitionDuration = '0ms';
                if (direction === NEXT_DIRECTION && buttonClickHandler.prototype.count < -1 * dataCount) {
                    container.style.transform = `translateX(${-1 * CELL_WIDTH}px)`;
                    buttonClickHandler.prototype.count = -1;
                } else if (direction === PREV_DIRECTION && buttonClickHandler.prototype.count === 0) {
                    console.log('prev', buttonClickHandler.prototype.count);
                    container.style.transform = `translateX(${-1 * dataCount * CELL_WIDTH}px)`;
                    buttonClickHandler.prototype.count = -1 * dataCount;
                }
            };
        };
    };

    return buttonClickHandler;
};

const handleButtonClick = (buttons, container) => {
    const [prevBtn, nextBtn] = buttons.querySelectorAll('.console__arrow');
    const ButtonClickHandler = makeButtonClickHandler();
    prevBtn.addEventListener('click', ButtonClickHandler.prototype.getClickHandler(container, PREV_DIRECTION, dummyData.length));
    nextBtn.addEventListener('click', ButtonClickHandler.prototype.getClickHandler(container, NEXT_DIRECTION, dummyData.length));
};

// TODO: 바깥에서 파라미터로 받아옴
const buttons = buttonConsole({ dataCount: dummyData.length });
const carouselContainer = renderContainer();

export const carousel = () => {
    // 파라미터로 width, height, container, buttonConsole 받아옴
    const carouselWindow = document.createElement('div');

    const render = () => {
        carouselWindow.className = 'carousel__window';
        carouselWindow.style.width = CELL_WIDTH + 'px';
        carouselWindow.style.height = CELL_HEIGHT + 'px';

        carouselContainer.classList.add('carousel__container');
        carouselWindow.appendChild(carouselContainer);
        carouselWindow.appendChild(buttons);
        handleButtonClick(buttons, carouselContainer);

        return carouselWindow;
    };

    return render();
};
