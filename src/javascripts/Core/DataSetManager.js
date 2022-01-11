import ObservableWithLocalStorage from './ObservableWithLocalStorage'

export default class DataSetManager extends ObservableWithLocalStorage {

    constructor(localStorageKey) {
        super(localStorageKey)
    
        if (!this.dataList) {
            this.dataList = []
        }
    }
    
    addData(dataToAdd) {
        if (!this.checkIfExists(dataToAdd)) {
            this.dataList.push(dataToAdd)
            this.notify()
        }
    }
    
    removeData(dataToRemove) {
        this.dataList.forEach((dataInList, idx) => {
            if (this.checkIfSame(dataToRemove, dataInList)) {
                this.dataList.splice(idx, 1)
                this.notify()
                return false
            }
        })
    }
    
    checkIfExists(dataToCompare) {
        let isExists = false
        
        this.dataList.forEach((dataInList) => {
            if (this.checkIfSame(dataToCompare, dataInList)) {
                isExists = true
                return false
            }
        })
        
        return isExists
    }
    
    clearData() {
        this.dataList = []
        this.notify()
    }
    
    checkIfSame(data1, data2) {
        return data1 === data2
    }

}