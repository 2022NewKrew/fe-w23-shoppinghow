import Component from '../../Core/Component'
import styles from './styles/RecentAndTaggedGoodsTab.module.scss'
import { recentlyViewedGoodsDataSetManager, taggedGoodsDataSetManager } from './goodsDataSetManager'

export default class RecentAndTaggedGoodsTab extends Component {
    
    static #RECENT_KEY = 'recent'
    static #TAGGED_KEY = 'tagged'
    
    #whatToShow = RecentAndTaggedGoodsTab.#RECENT_KEY
    
    #recentGoodsTabEl
    #taggedGoodsTabEl
    
    #recentGoodsNumEl
    #taggedGoodsNumEl
    #goodsListEl
    
    constructor() {
        super(`
            <div class="${ styles.tabContainer }">
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
        `)
        
        const tabEls = this.rootEl.querySelectorAll(`.${ styles.tabItem }`)
        this.#recentGoodsTabEl = tabEls[0]
        this.#taggedGoodsTabEl = tabEls[1]
        
        const goodsNumEls = this.rootEl.querySelectorAll(`.${ styles.tabItemNumber }`)
        this.#recentGoodsNumEl = goodsNumEls[0]
        this.#taggedGoodsNumEl = goodsNumEls[1]
        
        this.#goodsListEl = this.rootEl.querySelector(`.${ styles.goodsList }`)
        
        this.#setTabMouseOverEventListener()
        this.#setGoodsDataChangedEventListener()
        this.update()
    }
    
    #getGoodsListHTML(goodsList) {
        return goodsList.map((goods) => `<li class="${ styles.goodsItem }"><img src="${ goods.imgSrc }" alt="${ goods.title }"></li>`).join('')
    }
    
    update() {
        this.#recentGoodsNumEl.innerText = recentlyViewedGoodsDataSetManager.data.length
        this.#taggedGoodsNumEl.innerText = taggedGoodsDataSetManager.data.length
        
        switch (this.#whatToShow) {
            case RecentAndTaggedGoodsTab.#RECENT_KEY:
                this.#goodsListEl.innerHTML = this.#getGoodsListHTML(recentlyViewedGoodsDataSetManager.data)
                this.#recentGoodsTabEl.classList.add(styles.selectedTabItem)
                this.#taggedGoodsTabEl.classList.remove(styles.selectedTabItem)
                break
            
            case RecentAndTaggedGoodsTab.#TAGGED_KEY:
                this.#goodsListEl.innerHTML = this.#getGoodsListHTML(taggedGoodsDataSetManager.data)
                this.#taggedGoodsTabEl.classList.add(styles.selectedTabItem)
                this.#recentGoodsTabEl.classList.remove(styles.selectedTabItem)
                break
        }
    }
    
    #setTabMouseOverEventListener() {
        this.#recentGoodsTabEl.addEventListener('mouseover', () => {
            this.#whatToShow = RecentAndTaggedGoodsTab.#RECENT_KEY
            this.update()
        })
        
        this.#taggedGoodsTabEl.addEventListener('mouseover', () => {
            this.#whatToShow = RecentAndTaggedGoodsTab.#TAGGED_KEY
            this.update()
        })
    }
    
    #setGoodsDataChangedEventListener() {
        recentlyViewedGoodsDataSetManager.subscribe(() => {
            this.update()
        })
        
        taggedGoodsDataSetManager.subscribe(() => {
            this.update()
        })
    }
    
}