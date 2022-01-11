const PREV_DIRECTION = 1;
const NEXT_DIRECTION = -1;

const duplicateFirstLastCell = (container) => {
    const firstClone = container.firstElementChild.cloneNode(true);
    const lastClone = container.lastElementChild.cloneNode(true);
    container.insertBefore(lastClone, container.firstElementChild);
    container.appendChild(firstClone);
};

function ButtonClickHandler(cell_width, dataLength) {
    this.count = -1;
    this.cell_width = cell_width;
    this.dataLength = dataLength;
}
ButtonClickHandler.prototype.getClickHandler = (container, direction) => {
    return function () {
        this.count += direction;
        container.style.transform = `translateX(${this.count * this.cell_width}px)`;
        container.style.transitionDuration = '300ms';
        container.ontransitionend = () => {
            container.style.transitionDuration = '0ms';
            if (direction === NEXT_DIRECTION && this.count < -1 * this.dataLength) {
                container.style.transform = `translateX(${-1 * this.cell_width}px)`;
                this.count = -1;
            } else if (direction === PREV_DIRECTION && this.count === 0) {
                container.style.transform = `translateX(${-1 * this.dataLength * this.cell_width}px)`;
                this.count = -1 * this.dataLength;
            }
        };
    };
};

const handleButtonClick = ({ buttons, container, cell_width, dataLength }) => {
    if (dataLength <= 1) return;
    const [prevBtn, nextBtn] = buttons.querySelectorAll('.arrow-button');
    const BCHandler = new ButtonClickHandler(cell_width, dataLength);
    prevBtn.addEventListener(
        'click',
        BCHandler.__proto__.getClickHandler(container, PREV_DIRECTION, dataLength).bind(BCHandler)
    );
    nextBtn.addEventListener(
        'click',
        BCHandler.__proto__.getClickHandler(container, NEXT_DIRECTION, dataLength).bind(BCHandler)
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
