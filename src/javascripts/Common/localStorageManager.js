export function pushToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}

export function pullFromLocalStroage(key) {
    return JSON.parse(localStorage.getItem(key))
}