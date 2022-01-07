export default class GoodsDataManager {
    
    static #RECENT_GOODS_LIST_KEY = 'recentGoodsList'
    static #TAGGED_GOODS_LIST_KEY = 'taggedGoodsList'
    
    static #recentGoodsDataList = []
    static #taggedGoodsDataList = []
    
    //TODO: Built in API인 CustomEvent로 교체해보기
    static #recentGoodsDataChangedEventListenerList = []
    static #taggedGoodsDataChangedEventListenerList = []
    
    
    static #notifyRecentGoodsDataChangedEvent() {
        this.#recentGoodsDataChangedEventListenerList.forEach((eventListener) => {
            eventListener(this.#recentGoodsDataList)
        })
    }
    
    static #notifyTaggedGoodsDataChangedEvent() {
        this.#taggedGoodsDataChangedEventListenerList.forEach((eventListener) => {
            eventListener(this.#taggedGoodsDataList)
        })
    }
    
    static #checkIfSameGoodsDataExists(goodsList, goodsData, callbackIfSameGoodsDataExists) {
        goodsList.forEach((goodsDataToCompare, idx) => {
            if (goodsDataToCompare.title === goodsData.title
                && goodsDataToCompare.imgSrc === goodsData.imgSrc) {
                callbackIfSameGoodsDataExists(idx)
                return false
            }
        })
    }
    
    static init() {
        this.pullFromLocalStorage()
    
        window.addEventListener('beforeunload', () => {
            this.pushToLocalStorage()
        })
    }
    
    static checkIfSameTaggedGoodsDataExists(goodsData) {
        let doSameTaggedGoodsDataExists = false
        
        this.#checkIfSameGoodsDataExists(this.#taggedGoodsDataList, goodsData, () => {
            doSameTaggedGoodsDataExists = true
        })
        
        return doSameTaggedGoodsDataExists
    }
    
    static pullFromLocalStorage() {
        const recentGoodsSerializedStr = localStorage.getItem(this.#RECENT_GOODS_LIST_KEY)
        const taggedGoodsSerializedStr = localStorage.getItem(this.#TAGGED_GOODS_LIST_KEY)
        
        if (recentGoodsSerializedStr) {
            this.#recentGoodsDataList = JSON.parse(recentGoodsSerializedStr)
        }
    
        if (taggedGoodsSerializedStr) {
            this.#taggedGoodsDataList = JSON.parse(taggedGoodsSerializedStr)
        }
    }
    
    static pushToLocalStorage() {
        localStorage.setItem(this.#RECENT_GOODS_LIST_KEY, JSON.stringify(this.#recentGoodsDataList))
        localStorage.setItem(this.#TAGGED_GOODS_LIST_KEY, JSON.stringify(this.#taggedGoodsDataList))
    }
    
    static addRecentGoodsData(goodsData) {
        let isDuplicate = false
        
        this.#checkIfSameGoodsDataExists(this.#recentGoodsDataList, goodsData, () => {
            isDuplicate = true
        })
    
        if (!isDuplicate) {
            this.#recentGoodsDataList.push(goodsData)
            this.#notifyRecentGoodsDataChangedEvent()
        }
    }
    
    static addTaggedGoodsData(goodsData) {
        let isDuplicate = false
    
        this.#checkIfSameGoodsDataExists(this.#taggedGoodsDataList, goodsData, () => {
            isDuplicate = true
        })
    
        if (!isDuplicate) {
            this.#taggedGoodsDataList.push(goodsData)
            this.#notifyTaggedGoodsDataChangedEvent()
        }
    }
    
    static getRecentGoodsDataList() {
        return this.#recentGoodsDataList
    }
    
    static getTaggedGoodsDataList() {
        return this.#taggedGoodsDataList
    }
    
    static removeTaggedGoodsData(goodsData) {
        this.#checkIfSameGoodsDataExists(this.#taggedGoodsDataList, goodsData, (idx) => {
            this.#taggedGoodsDataList.splice(idx, 1)
            this.#notifyTaggedGoodsDataChangedEvent()
        })
    }
    
    static addRecentGoodsDataChangedEventListener(eventListener) {
        this.#recentGoodsDataChangedEventListenerList.push(eventListener)
    }
    
    static addTaggedGoodsDataChangedEventListener(eventListener) {
        this.#taggedGoodsDataChangedEventListenerList.push(eventListener)
    }

}

GoodsDataManager.init()