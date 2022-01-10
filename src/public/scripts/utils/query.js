export const $ = (query, parentNode = document) => {
  return parentNode.querySelector(query);
};

export const $All = (query, parentNode = document) => {
  return parentNode.querySelectorAll(query);
};
