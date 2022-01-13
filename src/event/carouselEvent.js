const CAROUSEL_TRANSITION_STYLE = 'transform 0.4s ease-in-out';
const CAROUSEL_AUTO_MOVE_DELAY = 1000; // ms


export const addCarouselEvent = ({leftBtnEl, rightBtnEl, containerEl}) => {
    const state = {
        index: 1, // 0th item : clone of last item
        waitTransition: false
    };
    // item 이 없는 경우 return
    if(containerEl.children.length === 0) return;

    const itemWidth = containerEl.firstElementChild.clientWidth;
    const lastIndex = containerEl.children.length - 2;
    containerEl.style.transform = `translateX(${-itemWidth * state.index}px)`;

    // click event
    const clickHandler = (event) => {
        // tansition 중이면 동작안함
        if(state.waitTransition) {
            return;
        }
        state.waitTransition = true;
        
        // 좌우 버튼 구분
        if(event.currentTarget === leftBtnEl) {
            state.index--;
        }
        else {
            state.index++;
        }

        // transition 설정
        containerEl.style.transition = CAROUSEL_TRANSITION_STYLE;
        containerEl.style.transform = `translateX(${-itemWidth * state.index}px)`;
    }
    leftBtnEl.addEventListener('click', clickHandler);
    rightBtnEl.addEventListener('click', clickHandler);

    // transition end event
    containerEl.addEventListener('transitionend', () => {
        if (state.index < 1) {
            state.index = lastIndex;
        }
        else if (state.index > lastIndex) {
            state.index = 1;
        }
        else {
            state.waitTransition = false;
            return;
        }

        containerEl.style.removeProperty('transition');
        containerEl.style.transform = `translateX(${-itemWidth * state.index}px)`;
        state.waitTransition = false;
    });
    
}