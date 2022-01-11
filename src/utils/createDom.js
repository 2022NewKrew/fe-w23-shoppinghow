export const createDom = (tag, options) => {
    const dom = document.createElement(tag);
    for (const key in options) {
        dom[key] = options[key];
    }
    return dom;
};
