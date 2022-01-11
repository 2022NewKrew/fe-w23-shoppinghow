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
    
    get data() {
        return this.#data
    }
    
    set data(newData) {
        this.#data = newData
        this.notify()
    }

}