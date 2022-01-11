export const throttling = (func, delay) => {
  let eventId = null;
  return (...args) => {
    if (!eventId) {
      func(...args);
      eventId = setTimeout(() => {
        clearTimeout(eventId);
        eventId = null;
      }, delay);
    }
  };
};
