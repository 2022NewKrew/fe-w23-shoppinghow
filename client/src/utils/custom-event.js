export default {
  fire: (type, data = {}) => {
    document.dispatchEvent(new CustomEvent(type, { detail: data }));
  },
  subscribe: (type, listener) => {
    document.addEventListener(type, listener);
  },
};
