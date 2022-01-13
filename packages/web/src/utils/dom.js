export const createHTML = (tagName, options) => {
  const El = document.createElement(tagName);
  for (let key in options) {
    El[key] = options[key];
  }
  return El;
};

export const $ = (selector) => document.querySelector(selector);

export const debounce = (func, wait) => {
  let inDebounce;
  return function () {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func(), wait);
  };
};
