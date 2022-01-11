export function getItemInLocalStroage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : [];
}

export function setItemInLocalStroage(key, inputValue, LIMIT) {
  let currValue = getItemInLocalStroage(key);
  currValue.push(inputValue);
  currValue = currValue.length > LIMIT ? currValue.slice(1, currValue.length) : currValue;
  localStorage.setItem(key, JSON.stringify(currValue));
}

export function removeItemInLocalStroage(key, index) {
  const currValue = getItemInLocalStroage(key);
  currValue.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(currValue));
}
