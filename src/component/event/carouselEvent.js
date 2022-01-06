const CAROUSEL_TRANSITION_STYLE = 'transform 0.4s ease-in-out';
const CAROUSEL_AUTO_MOVE_DELAY = 1000; // ms

export const addCarouselEvent = ({leftBtnEl, rightBtnEl, containerEl}) => {
    const state = {
        index: 1, // 0th item : clone of last item
        waitTransition: false
    };
    const itemWidth = containerEl.firstElementChild.clientWidth;
    const lastIndex = containerEl.children.length - 2;
    containerEl.style.transform = `translateX(${-itemWidth * state.index}px)`;

    // click event
    leftBtnEl.addEventListener('click', () => {
        if(state.waitTransition) return;
        state.waitTransition = true;
        state.index--;
        containerEl.style.transition = CAROUSEL_TRANSITION_STYLE;
        containerEl.style.transform = `translateX(${-itemWidth * state.index}px)`;
    });
    rightBtnEl.addEventListener('click', () => {
        if(state.waitTransition) return;
        state.waitTransition = true;
        state.index++;
        containerEl.style.transition = CAROUSEL_TRANSITION_STYLE;
        containerEl.style.transform = `translateX(${-itemWidth * state.index}px)`;
    });

    // transitionend event
    containerEl.addEventListener('transitionend', (event) => {
        if (state.index < 1) state.index = lastIndex;
        else if (state.index > lastIndex) state.index = 1;

        containerEl.style.removeProperty('transition');
        containerEl.style.transform = `translateX(${-itemWidth  * state.index}px)`;
        state.waitTransition = false;
    });
    
}