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

export const show = (target) => target.style.display = "block";

export const hide = (target) => target.style.display = "none";
export const setLocalStorage = (name, value) => localStorage.setItem(name, JSON.stringify(value));

export const getLocalStorage = (name) => JSON.parse(localStorage.getItem(name));
