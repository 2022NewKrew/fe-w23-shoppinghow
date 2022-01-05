const PREV_DIRECTION = 1;
const NEXT_DIRECTION = -1;

const makeButtonClickHandler = (cell_width, dataLength) => {
    function buttonClickHandler() {}
    buttonClickHandler.prototype.count = -1;
    buttonClickHandler.prototype.getClickHandler = (container, direction) => {
        return () => {
            buttonClickHandler.prototype.count += direction;
            container.style.transform = `translateX(${buttonClickHandler.prototype.count * cell_width}px)`;
            container.style.transitionDuration = '300ms';

            container.ontransitionend = () => {
                container.style.transitionDuration = '0ms';
                if (direction === NEXT_DIRECTION && buttonClickHandler.prototype.count < -1 * dataLength) {
                    container.style.transform = `translateX(${-1 * cell_width}px)`;
                    buttonClickHandler.prototype.count = -1;
                } else if (direction === PREV_DIRECTION && buttonClickHandler.prototype.count === 0) {
                    container.style.transform = `translateX(${-1 * dataLength * cell_width}px)`;
                    buttonClickHandler.prototype.count = -1 * dataLength;
                }
            };
        };
    };

    return buttonClickHandler;
};

const handleButtonClick = ({ buttons, container, cell_width, dataLength }) => {
    const [prevBtn, nextBtn] = buttons.querySelectorAll('.console__arrow');
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
        carouselWindow.appendChild(container);
        carouselWindow.appendChild(buttons);
        handleButtonClick(carouselInfo);

        return carouselWindow;
    };

    return render();
};
