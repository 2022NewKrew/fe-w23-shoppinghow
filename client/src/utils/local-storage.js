export function getItem(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export function setItem(key, value) {
  const toJson = JSON.stringify(value);
  localStorage.setItem(key, toJson);
}
