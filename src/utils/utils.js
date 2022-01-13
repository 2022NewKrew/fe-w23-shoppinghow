export const string2DomNode = (htmlString) => {
    const node = document.createElement('div');
    node.innerHTML = htmlString;
    return node.firstElementChild;
}

export const $ = (query, target = document) => target.querySelector(query);

export const $$ = (query, target = document) => target.querySelectorAll(query);

export const debounceEvent = ({$target, eventType, fn, DELAY_TIME = 300}) => {
    let debounce = undefined;
    $target.addEventListener(eventType, () => {
        clearTimeout(debounce);
        debounce = setTimeout(fn, DELAY_TIME);
    })
}