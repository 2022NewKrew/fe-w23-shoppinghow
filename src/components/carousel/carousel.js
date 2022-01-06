const PREV_DIRECTION = 1;
const NEXT_DIRECTION = -1;

const duplicateFirstLastCell = (container) => {
    const firstClone = container.firstElementChild.cloneNode(true);
    const lastClone = container.lastElementChild.cloneNode(true);
    container.insertBefore(lastClone, container.firstElementChild);
    container.appendChild(firstClone);
};

const makeButtonClickHandler = (cell_width, dataLength) => {
    function ButtonClickHandler() {}
    ButtonClickHandler.prototype.count = -1;
    ButtonClickHandler.prototype.getClickHandler = (container, direction) => {
        return () => {
            ButtonClickHandler.prototype.count += direction;
            container.style.transform = `translateX(${ButtonClickHandler.prototype.count * cell_width}px)`;
            container.style.transitionDuration = '300ms';
            container.ontransitionend = () => {
                container.style.transitionDuration = '0ms';
                if (direction === NEXT_DIRECTION && ButtonClickHandler.prototype.count < -1 * dataLength) {
                    container.style.transform = `translateX(${-1 * cell_width}px)`;
                    ButtonClickHandler.prototype.count = -1;
                } else if (direction === PREV_DIRECTION && ButtonClickHandler.prototype.count === 0) {
                    container.style.transform = `translateX(${-1 * dataLength * cell_width}px)`;
                    ButtonClickHandler.prototype.count = -1 * dataLength;
                }
            };
        };
    };

    return ButtonClickHandler;
};

const handleButtonClick = ({ buttons, container, cell_width, dataLength }) => {
    if (dataLength <= 1) return;
    const [prevBtn, nextBtn] = buttons.querySelectorAll('.arrow-button');
    const ButtonClickHandler = makeButtonClickHandler(cell_width, dataLength);
    prevBtn.addEventListener(
        'click',
        ButtonClickHandler.prototype.getClickHandler(container, PREV_DIRECTION, dataLength)
    );
    nextBtn.addEventListener(
        'click',
        ButtonClickHandler.prototype.getClickHandler(container, NEXT_DIRECTION, dataLength)
    );
};

export const carousel = (carouselInfo) => {
    const { cell_width, cell_height, container, buttons } = carouselInfo;
    const carouselWindow = document.createElement('div');

    const render = () => {
        carouselWindow.className = 'carousel__window';
        carouselWindow.style.width = cell_width + 'px';
        carouselWindow.style.height = cell_height + 'px';

        container.classList.add('carousel__container');
        duplicateFirstLastCell(container);
        container.style.transform = `translateX(${-1 * cell_width}px)`;
        carouselWindow.appendChild(container);
        carouselWindow.appendChild(buttons);
        handleButtonClick(carouselInfo);

        return carouselWindow;
    };

    return render();
};
