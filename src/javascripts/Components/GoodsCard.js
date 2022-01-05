import Component from '../Component'
import styles from '../../scss/goods-card.module.scss'
import GoodsDataManager from '../GoodsDataManager'

export default class GoodsCard extends Component {
    
    #goodsData
    
    constructor(goodsData) {
        super(`
            <div class="${ styles.cardContainer }">
                <div class="${ styles.card }">
                    <div class="${ styles.imgBox }">
                        <img src="//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895" alt="">
                    </div>
                    <div class="${ styles.descriptionBox }">
                        <div class="${ styles.title }">육즙가득 안심스테이크1+1</div>
                        <div class="${ styles.detailBox }">
                            <div class="${ styles.price }">
                                <span class="${ styles.priceNum }">27,750</span>
                                <span class="${ styles.priceUnit }">원</span>
                            </div>
                            <div class="${ styles.heartIcon }">
                        </div>
                    </div>
                </div>
            </div>
        `)
        
        this.#goodsData = goodsData
        
        this.#addTaggedClassIfTaggedGoods()
        this.#setClickEventListener()
    }
    
    #addTaggedClassIfTaggedGoods() {
        const heartIconEl = this.rootEl.querySelector(`.${ styles.heartIcon }`)
        
        if (GoodsDataManager.checkIfSameTaggedGoodsDataExists(this.#goodsData)) {
            heartIconEl.classList.add(styles.heartIconTagged)
        }
    }
    
    #setClickEventListener() {
        const cardEl = this.rootEl.querySelector(`.${ styles.card }`)
        const heartIconEl = cardEl.querySelector(`.${ styles.heartIcon }`)
        
        cardEl.addEventListener('click', (event) => {
            if (event.target === heartIconEl) {
                if (heartIconEl.classList.contains(styles.heartIconTagged)) {
                    heartIconEl.classList.remove(styles.heartIconTagged)
                    GoodsDataManager.removeTaggedGoodsData(this.#goodsData)
                } else {
                    heartIconEl.classList.add(styles.heartIconTagged)
                    GoodsDataManager.addTaggedGoodsData(this.#goodsData)
                }
            } else {
                GoodsDataManager.addRecentGoodsData(this.#goodsData)
            }
        })
    }
    
    set goodsData(newGoodsData) {
        this.#goodsData = newGoodsData
    }
    
}