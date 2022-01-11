export default class Observable {

    #data
    
    #listenerList =[]
    
    
    subscribe(listener) {
        this.#listenerList.push(listener)
    }
    
    notify() {
        this.#listenerList.forEach((listener) => {
            listener(this.#data)
        })
    }
    
    get dataList() {
        return this.#data
    }
    
    set dataList(newData) {
        this.#data = newData
        this.notify()
    }

}