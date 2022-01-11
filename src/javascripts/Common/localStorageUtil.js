export function pushToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}

export function pullFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}