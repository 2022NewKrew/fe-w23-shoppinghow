class GoodsDataManager {
    
    static #RECENT_GOODS_LIST_KEY = 'recentGoodsList'
    static #TAGGED_GOODS_LIST_KEY = 'taggedGoodsList'
    
    #recentGoodsDataList = []
    #taggedGoodsDataList = []
    
    //TODO: Built in API인 CustomEvent로 교체해보기
    #recentGoodsDataChangedEventListenerList = []
    #taggedGoodsDataChangedEventListenerList = []
    
    
    constructor() {
        this.init()
    }
    
    
    #notifyRecentGoodsDataChangedEvent() {
        this.#recentGoodsDataChangedEventListenerList.forEach((eventListener) => {
            eventListener(this.#recentGoodsDataList)
        })
    }
    
    #notifyTaggedGoodsDataChangedEvent() {
        this.#taggedGoodsDataChangedEventListenerList.forEach((eventListener) => {
            eventListener(this.#taggedGoodsDataList)
        })
    }
    
    #checkIfSameGoodsDataExists(goodsList, goodsData, callback) {
        goodsList.forEach((goodsDataToCompare, idx) => {
            if (goodsDataToCompare.title === goodsData.title
                && goodsDataToCompare.imgSrc === goodsData.imgSrc) {
                callback(idx)
                return false
            }
        })
    }
    
    init() {
        this.pullFromLocalStorage()
    
        window.addEventListener('beforeunload', () => {
            this.pushToLocalStorage()
        })
    }
    
    checkIfSameTaggedGoodsDataExists(goodsData) {
        let doSameTaggedGoodsDataExists = false
        
        this.#checkIfSameGoodsDataExists(this.#taggedGoodsDataList, goodsData, () => {
            doSameTaggedGoodsDataExists = true
        })
        
        return doSameTaggedGoodsDataExists
    }
    
    pullFromLocalStorage() {
        const recentGoodsSerializedStr = localStorage.getItem(GoodsDataManager.#RECENT_GOODS_LIST_KEY)
        const taggedGoodsSerializedStr = localStorage.getItem(GoodsDataManager.#TAGGED_GOODS_LIST_KEY)
        
        if (recentGoodsSerializedStr) {
            this.#recentGoodsDataList = JSON.parse(recentGoodsSerializedStr)
        }
    
        if (taggedGoodsSerializedStr) {
            this.#taggedGoodsDataList = JSON.parse(taggedGoodsSerializedStr)
        }
    }
    
    pushToLocalStorage() {
        localStorage.setItem(GoodsDataManager.#RECENT_GOODS_LIST_KEY, JSON.stringify(this.#recentGoodsDataList))
        localStorage.setItem(GoodsDataManager.#TAGGED_GOODS_LIST_KEY, JSON.stringify(this.#taggedGoodsDataList))
    }
    
    addRecentGoodsData(goodsData) {
        let isDuplicate = false
        
        this.#checkIfSameGoodsDataExists(this.#recentGoodsDataList, goodsData, () => {
            isDuplicate = true
        })
    
        if (!isDuplicate) {
            this.#recentGoodsDataList.push(goodsData)
            this.#notifyRecentGoodsDataChangedEvent()
        }
    }
    
    addTaggedGoodsData(goodsData) {
        let isDuplicate = false
    
        this.#checkIfSameGoodsDataExists(this.#taggedGoodsDataList, goodsData, () => {
            isDuplicate = true
        })
    
        if (!isDuplicate) {
            this.#taggedGoodsDataList.push(goodsData)
            this.#notifyTaggedGoodsDataChangedEvent()
        }
    }
    
    getRecentGoodsDataList() {
        return this.#recentGoodsDataList
    }
    
    getTaggedGoodsDataList() {
        return this.#taggedGoodsDataList
    }
    
    removeTaggedGoodsData(goodsData) {
        this.#checkIfSameGoodsDataExists(this.#taggedGoodsDataList, goodsData, (idx) => {
            this.#taggedGoodsDataList.splice(idx, 1)
            this.#notifyTaggedGoodsDataChangedEvent()
        })
    }
    
    addRecentGoodsDataChangedEventListener(eventListener) {
        this.#recentGoodsDataChangedEventListenerList.push(eventListener)
    }
    
    addTaggedGoodsDataChangedEventListener(eventListener) {
        this.#taggedGoodsDataChangedEventListenerList.push(eventListener)
    }

}

const goodsDataManager = new GoodsDataManager()

export default goodsDataManager