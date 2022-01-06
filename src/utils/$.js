export const $ = (selector, element = document) => {
  return element.querySelector(selector);
};

export const $$ = (selector, element = document) => {
  return element.querySelectorAll(selector);
};

/**
 * @param {string} html
 * @return {HTMLElement}
 */
export const htmlToElement = (html) => {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
};
