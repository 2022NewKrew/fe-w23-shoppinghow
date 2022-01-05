import Component from '../Component'
import styles from '../../scss/goods-floating-layer.module.scss'

export default class GoodsFloatingLayer extends Component {
    
    static RECENT_GOODS_LIST_KEY = 'recentGoodsList'
    static TAG_GOODS_LIST_KEY = 'tagGoodsList'
    
    #recentGoodsList
    #tagGoodsList
    #whatToShow = GoodsFloatingLayer.RECENT_GOODS_LIST_KEY
    
    #recentGoodsTabEl
    #tagGoodsTabEl
    
    #recentGoodsNumEl
    #tagGoodsNumEl
    #goodsListEl
    
    constructor() {
        super(`
            <div class="${ styles.floatingLayerBenchmark }">
                <div class="${ styles.floatingLayer }">
                    <ul class="${ styles.tab }">
                        <li class="${ styles.tabItem }">
                            <span class="${ styles.tabItemText }">최근 본 상품</span>
                            <span class="${ styles.tabItemNumber }">0</span>
                        </li>
                        <li class="${ styles.tabItem }">
                            <span class="${ styles.tabItemText }">내가 찜한 상품</span>
                            <span class="${ styles.tabItemNumber }">0</span>
                        </li>
                    </ul>
                    <div class="${ styles.goodsPanel }">
                        <ul class="${ styles.goodsList }"></ul>
                    </div>
                </div>
            </div>
        `)
        
        const tabEls = this.rootEl.querySelectorAll(`.${ styles.tabItem }`)
        this.#recentGoodsTabEl = tabEls[0]
        this.#tagGoodsTabEl = tabEls[1]
        
        const goodsNumEls = this.rootEl.querySelectorAll(`.${ styles.tabItemNumber }`)
        this.#recentGoodsNumEl = goodsNumEls[0]
        this.#tagGoodsNumEl = goodsNumEls[1]
        
        this.#goodsListEl = this.rootEl.querySelector(`.${ styles.goodsList }`)
        
        this.#initLocalStorage()
        this.#setTabMouseOverEventListener()
        this.#setStorageChangedEventListener()
        this.update()
    }
    
    #initLocalStorage() {
        const recentGoodsDataList = JSON.parse(localStorage.getItem(GoodsFloatingLayer.RECENT_GOODS_LIST_KEY))
        const tagGoodsDataList = JSON.parse(localStorage.getItem(GoodsFloatingLayer.TAG_GOODS_LIST_KEY))
    
        if (!recentGoodsDataList) {
            localStorage.setItem(GoodsFloatingLayer.RECENT_GOODS_LIST_KEY, '[]')
        } else {
            this.#recentGoodsList = recentGoodsDataList
        }
        
        if (!tagGoodsDataList) {
            localStorage.setItem(GoodsFloatingLayer.TAG_GOODS_LIST_KEY, '[]')
        } else {
            this.#tagGoodsList = tagGoodsDataList
        }
    }
    
    #getGoodsListHTML(goodsList) {
        return goodsList.map((goods) => `<img src="${ goods.imgSrc }" alt="${ goods.name }">`).join()
    }
    
    update() {
        this.#recentGoodsNumEl.innerText = this.#recentGoodsList.length
        this.#tagGoodsNumEl.innerText = this.#tagGoodsList.length
        
        switch (this.#whatToShow) {
            case GoodsFloatingLayer.RECENT_GOODS_LIST_KEY:
                this.#goodsListEl.innerHTML = this.#getGoodsListHTML(this.#recentGoodsList)
                this.#recentGoodsTabEl.classList.add(styles.selectedTabItem)
                this.#tagGoodsTabEl.classList.remove(styles.selectedTabItem)
                break
            
            case GoodsFloatingLayer.TAG_GOODS_LIST_KEY:
                this.#goodsListEl.innerHTML = this.#getGoodsListHTML(this.#tagGoodsList)
                this.#tagGoodsTabEl.classList.add(styles.selectedTabItem)
                this.#recentGoodsTabEl.classList.remove(styles.selectedTabItem)
                break
        }
    }
    
    #setTabMouseOverEventListener() {
        this.#recentGoodsTabEl.addEventListener('mouseover', () => {
            this.#whatToShow = GoodsFloatingLayer.RECENT_GOODS_LIST_KEY
            this.update()
        })
        
        this.#tagGoodsTabEl.addEventListener('mouseover', () => {
            this.#whatToShow = GoodsFloatingLayer.TAG_GOODS_LIST_KEY
            this.update()
        })
    }
    
    #setStorageChangedEventListener() {
        window.addEventListener('storage', () => {
            console.log('storage updated')
            this.#recentGoodsList = JSON.parse(localStorage.getItem(GoodsFloatingLayer.RECENT_GOODS_LIST_KEY))
            this.#tagGoodsList = JSON.parse(localStorage.getItem(GoodsFloatingLayer.TAG_GOODS_LIST_KEY))
            this.update()
        })
    }
    
}