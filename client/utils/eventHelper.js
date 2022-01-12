export const prevent = (callback) => {
  return function (e) {
    e.preventDefault();
    callback.apply(this, e);
  };
};

export const debounce = (callback, limit = 400) => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, arguments);
    }, limit);
  };
};

export const throttle = (callback, limit = 400) => {
  let wait = false;
  return function () {
    if (!wait) {
      callback.apply(this, arguments);
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
};
