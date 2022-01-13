const HOVER_DELAY_TIME = 1000;

/*
<div class="element"> <-- {element}
    <div class="window"></div>
</div>

.element .window {
    display : none;
}
.element.on window {
    display : block;
}
*/

export const addHoverEvent = ({element}) => {
    const state = {
        mouseover: false,
    };
    element.addEventListener('mouseenter', (event) => {
        state.mouseover = true;
        event.currentTarget.classList.add('on');
    });
    element.addEventListener('mouseleave', (event) => {
        const target = event.currentTarget;
        state.mouseover = false;
        setTimeout(() => {
            if(state.mouseover) return;
            target.classList.remove('on');
        }, HOVER_DELAY_TIME);
    });
}