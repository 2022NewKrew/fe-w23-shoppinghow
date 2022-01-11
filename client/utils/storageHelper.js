export const getSessionStorageItem = (key) => {
  let obj;
  try {
    obj = JSON.parse(sessionStorage.getItem(key));
  } catch (e) {
    if (process.env.DEBUG) console.error(e);
    obj = null;
  } finally {
    return obj;
  }
};

export const setSessionStorageItem = (key, item) => {
  sessionStorage.setItem(key, JSON.stringify(item));
};
