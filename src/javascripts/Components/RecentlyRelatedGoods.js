import Component from '../Core/Component'
import styles from '../../scss/ComponentStyles/RecentlyRelatedGoods.module.scss'
import GoodsList from './GoodsList'
import GoodsDataManager from '../Data/GoodsDataManager'

export default class RecentlyRelatedGoods extends Component {
    
    static #NUMBER_OF_ITEM_PER_PAGE = 5
    
    #recentGoodsDataList
    
    #currentSelectedIdx = 0
    #currentPageIdx = 0
    
    #headerTabListEl
    
    #goodsListComponent
    
    constructor() {
        const goodsList = new GoodsList()
        
        super(`
            <div class="${ styles.component }">
                <div class="${ styles.headerTab }">
                    <ul class="${ styles.headerTabList }"></ul>
                    <div class="${ styles.sideBtnBox }">
                        <div class="${ styles.sideBtn } ${ styles.leftSideBtn }">
                            <div class="${ styles.sideBtnIcon }"></div>
                        </div>
                        <div class="${ styles.sideBtn } ${ styles.rightSideBtn }">
                            <div class="${ styles.sideBtnIcon }"></div>
                        </div>
                    </div>
                </div>
                <div data-component="GoodsList"></div>
            </div>
        `, {
            'GoodsList': goodsList
        })
        
        this.#goodsListComponent = goodsList
        this.#headerTabListEl = this.rootEl.querySelector(`.${ styles.headerTabList }`)
        
        this.#pullRecentGoodsDataList()
        this.#setRecentGoodsDataChangeEventListener()
        this.#setSideEventClickEventListener()
        this.#setHeaderTabItemClickEventListener()
        this.update()
    }
    
    #pullRecentGoodsDataList() {
        this.#recentGoodsDataList = GoodsDataManager.getRecentGoodsDataList()
    }
    
    #getHeaderTabItemHTML(goodsDataList) {
        return goodsDataList.map((goodsData) => {
            if (goodsData.title) {
                return `
                    <li class="${ styles.headerTabItem }">
                        <div class="${ styles.imgBox }">
                            <img src="${ goodsData.imgSrc }" alt="${ goodsData.title }">
                        </div>
                        <div class="${ styles.detailBox }">
                            <div class="${ styles.title }">${ goodsData.title }</div>
                            <div class="${ styles.showBtn }">상품보기 ></div>
                        </div>
                        <div class="${ styles.diamondMark }"></div>
                    </li>
                `
            } else {
                return `
                    <li class="${ styles.headerTabItem } ${ styles.noItem }"></li>
                `
            }
        }).join('')
    }
    
    #setSideEventClickEventListener() {
        const leftSideBtnEl = this.rootEl.querySelector(`.${ styles.leftSideBtn }`)
        const rightSideBtnEl = this.rootEl.querySelector(`.${ styles.rightSideBtn }`)
        
        leftSideBtnEl.addEventListener('click', () => {
            if (this.#currentPageIdx > 0) {
                this.#currentPageIdx--
                this.update()
            }
        })
        
        rightSideBtnEl.addEventListener('click', () => {
            if (this.#recentGoodsDataList.length >= (this.#currentPageIdx + 1) * RecentlyRelatedGoods.#NUMBER_OF_ITEM_PER_PAGE) {
                this.#currentPageIdx++
                this.update()
            }
        })
    }
    
    #setHeaderTabItemClickEventListener() {
        this.#headerTabListEl.addEventListener('click', (event) => {
            const headerTabItemEls = this.#headerTabListEl.querySelectorAll(`.${ styles.headerTabItem }`)
            
            headerTabItemEls.forEach((headerTabItemEl, idx) => {
                if (event.target.classList.contains(styles.noItem)) {
                    return false
                }
                
                if (headerTabItemEl.contains(event.target)) {
                    this.#currentSelectedIdx = idx + RecentlyRelatedGoods.#NUMBER_OF_ITEM_PER_PAGE * this.#currentPageIdx
                    this.update()
                    return false
                }
            })
        })
    }
    
    #setRecentGoodsDataChangeEventListener() {
        GoodsDataManager.addRecentGoodsDataChangedEventListener((recentGoodsDataList) => {
            this.#recentGoodsDataList = recentGoodsDataList
            this.update()
        })
    }
    
    update() {
        const selectedIdxInPage = this.#currentSelectedIdx % RecentlyRelatedGoods.#NUMBER_OF_ITEM_PER_PAGE
        const startIdxToShow = RecentlyRelatedGoods.#NUMBER_OF_ITEM_PER_PAGE * this.#currentPageIdx
        const endIdxToShow = RecentlyRelatedGoods.#NUMBER_OF_ITEM_PER_PAGE * (this.#currentPageIdx + 1)
        const recentGoodsDataListToShow = this.#recentGoodsDataList.slice(startIdxToShow, endIdxToShow)
        
        while (recentGoodsDataListToShow.length < RecentlyRelatedGoods.#NUMBER_OF_ITEM_PER_PAGE) {
            recentGoodsDataListToShow.push({})
        }
        
        this.#headerTabListEl.innerHTML = this.#getHeaderTabItemHTML(recentGoodsDataListToShow)
        this.#goodsListComponent.setJsonUrl(`http://localhost:3000/json/related-goods-${ selectedIdxInPage }.json`)
        
        if (this.#currentSelectedIdx >= startIdxToShow
            && this.#currentSelectedIdx < endIdxToShow) {
            const headerTabItemEls = this.#headerTabListEl.querySelectorAll(`.${ styles.headerTabItem }`)
            
            headerTabItemEls[selectedIdxInPage].classList.add(styles.headerTabItemSelected)
        }
    }
    
}