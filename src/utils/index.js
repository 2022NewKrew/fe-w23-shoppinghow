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
