const HOVER_DELAY_TIME = 1000;

export const addHoverEvent = ({element}) => {
    const state = {
        mouseover: false,
    };
    element.addEventListener('mouseover', (event) => {
        state.mouseover = true;
        event.currentTarget.classList.add('on');
    });
    element.addEventListener('mouseout', (event) => {
        const target = event.currentTarget;
        state.mouseover = false;
        setTimeout(() => {
            if(state.mouseover) return;
            target.classList.remove('on');
        }, HOVER_DELAY_TIME);
    });
}