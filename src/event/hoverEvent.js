export const addHoverEvent = ({
    $element,
    ActiveClassName = 'on',
    HOVER_DELAY_TIME = 500,
    enterFn = () => {},
    leaveFn = () => {}
}) => {
    let mouseleaveTimeout = undefined;
    
    $element.addEventListener('mouseenter', () => {
        clearTimeout(mouseleaveTimeout);
        // 처음 혹은 mouseleave 내의 timeout 함수가 동작한 이후에만 작동 
        if(mouseleaveTimeout === undefined) {
            $element.classList.add(ActiveClassName);
            enterFn();
        }
    });
    $element.addEventListener('mouseleave', () => {
        mouseleaveTimeout = setTimeout(() => {
            mouseleaveTimeout = undefined;
            $element.classList.remove(ActiveClassName);
            leaveFn();
        }, HOVER_DELAY_TIME);
    });
}