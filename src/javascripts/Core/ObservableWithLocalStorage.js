import Observable from './Observable'
import { pullFromLocalStorage, pushToLocalStorage } from '../Common/localStorageUtil'

export default class ObservableWithLocalStorage extends Observable {
    
    constructor(localStorageKey) {
        super()
    
        const dataList = pullFromLocalStorage(localStorageKey)
    
        if (dataList) {
            this.dataList = dataList
        }
        
        window.addEventListener('beforeunload', () => {
            pushToLocalStorage(localStorageKey, this.dataList)
        })
    }
    
}