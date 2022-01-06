const HOVER_DELAY_TIME = 1000 //ms
const TOP10_SLIDE_INTERVAL_TIME = 4000 //ms
const TOP10_SLIDE_TRANSITION_STYLE = 'transform 0.4s ease-in-out';

export const top10Event = ({inputBoxEl, inputEl, containerEl}) => {
    const state = {
        focus: false,
        index: 0
    }
    const itemHeight = containerEl.firstElementChild.clientHeight;
    const lastIndex = containerEl.children.length - 2;

    // auto slide
    setInterval(() => {
        state.index++;
        containerEl.style.transition = TOP10_SLIDE_TRANSITION_STYLE;
        containerEl.style.transform = `translateY(${-itemHeight * state.index}px)`;
    }, TOP10_SLIDE_INTERVAL_TIME);
    containerEl.addEventListener('transitionend', ()=> {
        if(state.index > lastIndex) {
            state.index = 0;
            containerEl.style = '';
        }
    })

    // css change when [focus] and [hover after focus]
    inputEl.addEventListener('focus', () => {
        state.focus = true;
        inputBoxEl.classList.add('focus');
    });
    inputEl.addEventListener('blur', () => {
        if(inputEl.value !== '') return;
        inputBoxEl.classList.remove('focus');
    });

    inputBoxEl.addEventListener('mouseover', ()=> {
        state.focus = true;
    });
    inputBoxEl.addEventListener('mouseout', () => {
        state.focus = false;
        setTimeout(()=> {
            if(state.focus) return;
            inputEl.blur();
        }, HOVER_DELAY_TIME);
    });

}