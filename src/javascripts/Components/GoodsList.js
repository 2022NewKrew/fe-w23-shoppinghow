import Component from '../Component'
import styles from '../../scss/goods-list.module.scss'
import GoodsCard from './GoodsCard'

export default class GoodsList extends Component {
    
    #goodsDataList
    #goodsCardComponentList = []
    
    #goodListEl
    
    constructor(goodsJsonUrl) {
        super(`
            <div class="${ styles.component }">
                <ul class="${ styles.goodsList }"></ul>
            </div>
        `)
        
        this.#goodListEl = this.rootEl.querySelector(`.${ styles.goodsList }`)
        
        this.#fetchGoodsData(goodsJsonUrl, (goodsDataList) => {
            this.#goodsDataList = goodsDataList
            this.update()
        })
    }
    
    update() {
        this.#goodsCardComponentList.forEach((goodsCardComponent) => {
            goodsCardComponent.remove()
        })
        
        this.#goodsDataList.forEach((goodsData) => {
            const goodsCardComponent = new GoodsCard(goodsData)
            
            this.addChild(goodsCardComponent, this.#goodListEl)
            this.#goodsCardComponentList.push(goodsCardComponent)
        })
    }
    
    #fetchGoodsData(goodsJsonUrl, callbackAfterFetch) {
        fetch(goodsJsonUrl)
            .then((res) => {
                res.json().then(callbackAfterFetch)
            })
    }
    
}