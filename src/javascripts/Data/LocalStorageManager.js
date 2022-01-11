import { pullFromLocalStorage, pushToLocalStorage } from '../Common/localStorageUtil'

class LocalStorageManager extends Observable {
    
    constructor(localStorageKey) {
        super()
        
        this.dataList = pullFromLocalStorage(localStorageKey)
        
        window.addEventListener('beforeunload', () => {
            pushToLocalStorage(localStorageKey, this.dataList)
        })
    }
    
}``

export const recentlyViewedGoodsData = new LocalStorageManager('recentlyViewedGoods')
export const taggedGoodsData = new LocalStorageManager('taggedGoods')