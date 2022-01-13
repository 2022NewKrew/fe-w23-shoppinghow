export const $ = (selector) => document.querySelector(selector);

export const $$ = (selector) => document.querySelectorAll(selector);

export const setMVC = async (Model, View, Controller) => {
    const model = new Model();
    await model.init();
    const view = new View(model);
    const controller = new Controller(model, view);
    controller.render();
};

export const mount = (target, templateID) => {
    const template = $(templateID).content.children[0];
    target.appendChild(template.cloneNode(true));
};

export const rotateComponent = (target, moveDegree, initialPosition, moveDirection, lastListPosition, transitionDelay) => {
    const startPoint = parseInt(getComputedStyle(target)[moveDirection].split("px")[0]);
    if (!target.classList.contains("animate")) {
        target.classList.add("animate"); 
    }
    target.style[moveDirection] = `${startPoint - moveDegree}px`;
    if (startPoint === lastListPosition) {
        setTimeout(() => {
            target.classList.remove("animate"); 
            target.style[moveDirection] = `${initialPosition}px`;
        }, transitionDelay)
    }
};

export const show = (target) => target.style.display = "block";

export const hide = (target) => target.style.display = "none";

// 출처) 모던 자바스크립트 Deep Dive
export const throttle = (cb, delay) => {
    let timerId;
    return event => {
        if (timerId) return;
        timerId = setTimeout(() => {
            cb(event);
            timerId = null;
        }, delay, event);
    };
}

export const setLocalStorage = (name, value) => localStorage.setItem(name, JSON.stringify(value));

export const getLocalStorage = (name) => JSON.parse(localStorage.getItem(name));
