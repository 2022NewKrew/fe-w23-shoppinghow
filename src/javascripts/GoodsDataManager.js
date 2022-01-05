export default class GoodsDataManager {
    
    static #RECENT_GOODS_LIST_KEY = 'recentGoodsList'
    static #TAGGED_GOODS_LIST_KEY = 'tagGoodsList'
    
    static #recentGoodsDataList = []
    static #taggedGoodsDataList = []
    
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
    
    static #checkIfSameGoodsDataExists(goodsList, goodsData) {
        goodsList.forEach((goodsDataToCompare, idx) => {
            if (goodsDataToCompare.name === goodsData.name
                && goodsDataToCompare.imgSrc === goodsData.imgSrc) {
                return false
            }
        })
        
        return true
    }
    
    static pullFormLocalStorage() {
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
        if (this.#checkIfSameGoodsDataExists(this.#recentGoodsDataList, goodsData)) {
            this.#recentGoodsDataList.push(goodsData)
            this.#notifyRecentGoodsDataChangedEvent()
        }
    }
    
    static addTaggedGoodsData(goodsData) {
        if (this.#checkIfSameGoodsDataExists(this.#taggedGoodsDataList, goodsData)) {
            this.#taggedGoodsDataList.push(goodsData)
            this.#notifyTaggedGoodsDataChangedEvent()
        }
    }
    
    static addRecentGoodsDataChangedEventListener(eventListener) {
        this.#recentGoodsDataChangedEventListenerList.push(eventListener)
    }
    
    static addTaggedGoodsDataChangedEventListener(eventListener) {
        this.#taggedGoodsDataChangedEventListenerList.push(eventListener)
    }

}

window.addEventListener('beforeunload', () => {
    GoodsDataManager.pushToLocalStorage()
})