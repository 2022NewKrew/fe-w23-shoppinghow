export function pushToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}

export function pullFromLocalStorage(key) {
    const jsonStr = localStorage.getItem(key)
    
    if (jsonStr) {
        return JSON.parse(localStorage.getItem(key))
    } else {
        return null
    }
}