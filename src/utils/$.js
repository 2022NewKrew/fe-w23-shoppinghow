export const $ = (selector, element = document) => {
  return element.querySelector(selector);
};

export const $$ = (selector, element = document) => {
  return element.querySelectorAll(selector);
};
