import Component from '../Core/Component'
import styles from '../../scss/ComponentStyles/RecentlyRelatedGoods.module.scss'
import GoodsList from './GoodsList'
import { recentlyViewedGoodsDataSetManager } from '../Data/goodsDataSetManager'

export default class RecentlyRelatedGoods extends Component {
    
    static #NUMBER_OF_ITEM_PER_PAGE = 5
    
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
                    <div class="${ styles.sideBtn } ${ styles.leftSideBtn }">
                        <div class="${ styles.sideBtnIcon }"></div>
                    </div>
                    <div class="${ styles.sideBtn } ${ styles.rightSideBtn }">
                        <div class="${ styles.sideBtnIcon }"></div>
                    </div>
                </div>
                <div data-component="GoodsList"></div>
            </div>
        `, {
            'GoodsList': goodsList
        })
        
        this.#goodsListComponent = goodsList
        this.#headerTabListEl = this.rootEl.querySelector(`.${ styles.headerTabList }`)
        
        this.#setRecentGoodsDataChangeEventListener()
        this.#setSideBtnClickEventListener()
        this.#setHeaderTabItemClickEventListener()
        this.update()
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
    
    #setSideBtnClickEventListener() {
        const leftSideBtnEl = this.rootEl.querySelector(`.${ styles.leftSideBtn }`)
        const rightSideBtnEl = this.rootEl.querySelector(`.${ styles.rightSideBtn }`)
        
        leftSideBtnEl.addEventListener('click', () => {
            if (this.#currentPageIdx > 0) {
                this.#currentPageIdx--
                this.update()
            }
        })
        
        rightSideBtnEl.addEventListener('click', () => {
            if (recentlyViewedGoodsDataSetManager.dataList.length >= (this.#currentPageIdx + 1) * RecentlyRelatedGoods.#NUMBER_OF_ITEM_PER_PAGE) {
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
        recentlyViewedGoodsDataSetManager.subscribe(() => {
            this.update()
        })
    }
    
    update() {
        const selectedIdxInPage = this.#currentSelectedIdx % RecentlyRelatedGoods.#NUMBER_OF_ITEM_PER_PAGE
        const startIdxToShow = RecentlyRelatedGoods.#NUMBER_OF_ITEM_PER_PAGE * this.#currentPageIdx
        const endIdxToShow = RecentlyRelatedGoods.#NUMBER_OF_ITEM_PER_PAGE * (this.#currentPageIdx + 1)
        const recentGoodsDataListToShow = recentlyViewedGoodsDataSetManager.data.slice(startIdxToShow, endIdxToShow)
        
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