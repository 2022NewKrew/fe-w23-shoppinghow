export function $(command) {
  return document.querySelector(command);
}

export function createHTML(tagName, options) {
  const tag = document.createElement(tagName);
  for (let option in options) {
    tag[option] = options[option];
  }
  return tag;
}

export function delay(ms) {
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle();
    }, ms);
  });
}