export const getLocalStorageList = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return [];
  }
};

export const addNewItem = (key, item) => {
  let prevList = getLocalStorageList(key);
  const index = prevList.indexOf(item);
  if (prevList.indexOf(item) > -1) {
    prevList.splice(index, 1);
  }
  const newList = [item, ...prevList];
  localStorage.setItem(key, JSON.stringify(newList));
  return newList;
};

export const deleteItem = (key, item) => {
  let prevList = getLocalStorageList(key);
  const index = prevList.indexOf(item);
  if (prevList.indexOf(item) > -1) {
    prevList.splice(index, 1);
  }
  localStorage.setItem(key, JSON.stringify(prevList));
  return prevList;
};
