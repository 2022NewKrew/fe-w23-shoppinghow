import Component from '../Component'
import styles from '../../scss/ComponentStyles/GoodsFloatingLayer.module.scss'
import GoodsDataManager from '../GoodsDataManager'

export default class GoodsFloatingLayer extends Component {
    
    static #RECENT_KEY = 'recent'
    static #TAGGED_KEY = 'tagged'
    
    #recentGoodsList = []
    #taggedGoodsList = []
    #whatToShow = GoodsFloatingLayer.#RECENT_KEY
    
    #recentGoodsTabEl
    #taggedGoodsTabEl
    
    #recentGoodsNumEl
    #taggedGoodsNumEl
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
        this.#taggedGoodsTabEl = tabEls[1]
        
        const goodsNumEls = this.rootEl.querySelectorAll(`.${ styles.tabItemNumber }`)
        this.#recentGoodsNumEl = goodsNumEls[0]
        this.#taggedGoodsNumEl = goodsNumEls[1]
        
        this.#goodsListEl = this.rootEl.querySelector(`.${ styles.goodsList }`)
        
        this.#pullGoodsData()
        this.#setTabMouseOverEventListener()
        this.#setGoodsDataChangedEventListener()
        this.update()
    }
    
    #pullGoodsData() {
        this.#recentGoodsList = GoodsDataManager.getRecentGoodsDataList()
        this.#taggedGoodsList = GoodsDataManager.getTaggedGoodsDataList()
    }
    
    #getGoodsListHTML(goodsList) {
        return goodsList.map((goods) => `<li class="${ styles.goodsItem }"><img src="${ goods.imgSrc }" alt="${ goods.title }"></li>`).join('')
    }
    
    update() {
        this.#recentGoodsNumEl.innerText = this.#recentGoodsList.length
        this.#taggedGoodsNumEl.innerText = this.#taggedGoodsList.length
        
        switch (this.#whatToShow) {
            case GoodsFloatingLayer.#RECENT_KEY:
                this.#goodsListEl.innerHTML = this.#getGoodsListHTML(this.#recentGoodsList)
                this.#recentGoodsTabEl.classList.add(styles.selectedTabItem)
                this.#taggedGoodsTabEl.classList.remove(styles.selectedTabItem)
                break
            
            case GoodsFloatingLayer.#TAGGED_KEY:
                this.#goodsListEl.innerHTML = this.#getGoodsListHTML(this.#taggedGoodsList)
                this.#taggedGoodsTabEl.classList.add(styles.selectedTabItem)
                this.#recentGoodsTabEl.classList.remove(styles.selectedTabItem)
                break
        }
    }
    
    #setTabMouseOverEventListener() {
        this.#recentGoodsTabEl.addEventListener('mouseover', () => {
            this.#whatToShow = GoodsFloatingLayer.#RECENT_KEY
            this.update()
        })
        
        this.#taggedGoodsTabEl.addEventListener('mouseover', () => {
            this.#whatToShow = GoodsFloatingLayer.#TAGGED_KEY
            this.update()
        })
    }
    
    #setGoodsDataChangedEventListener() {
        GoodsDataManager.addRecentGoodsDataChangedEventListener((recentGoodsDataList) => {
            this.#recentGoodsList = recentGoodsDataList
            this.update()
        })
        
        GoodsDataManager.addTaggedGoodsDataChangedEventListener((taggedGoodsDataList) => {
            this.#taggedGoodsList = taggedGoodsDataList
            this.update()
        })
    }
    
}