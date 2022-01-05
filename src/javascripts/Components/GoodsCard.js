import Component from '../Component'
import styles from '../../scss/goods-card.module.scss'
import GoodsFloatingLayer from './GoodsFloatingLayer'

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
        
        this.#addTaggedClassIfTagged()
        this.#setClickEventListener()
    }
    
    #checkIfSameGoodsDataExists(goodsList, goodsData, callbackIfSameGoodsDataExists) {
        goodsList.forEach((goodsData, idx) => {
            if (goodsData.name === this.#goodsData.name
                && goodsData.imgSrc === this.#goodsData.imgSrc) {
                callbackIfSameGoodsDataExists(idx)
                return false
            }
        })
    }
    
    #addTaggedClassIfTagged() {
        const tagGoodsList = JSON.parse(localStorage.getItem(GoodsFloatingLayer.TAG_GOODS_LIST_KEY))
    
        this.#checkIfSameGoodsDataExists(tagGoodsList, this.#goodsData, () => {
            const heartIconEl = this.rootEl.querySelector(`.${ styles.heartIcon }`)
    
            heartIconEl.classList.add(styles.heartIconTagged)
        })
    }
    
    #setClickEventListener() {
        const cardEl = this.rootEl.querySelector(`.${ styles.card }`)
        const heartIconEl = cardEl.querySelector(`.${ styles.heartIcon }`)
        
        cardEl.addEventListener('click', (event) => {
            if (event.target === heartIconEl) {
                const tagGoodsList = JSON.parse(localStorage.getItem(GoodsFloatingLayer.TAG_GOODS_LIST_KEY))
    
                if (heartIconEl.classList.contains(styles.heartIconTagged)) {
                    heartIconEl.classList.remove(styles.heartIconTagged)
                    
                    this.#checkIfSameGoodsDataExists(tagGoodsList, this.#goodsData, (idx) => {
                        tagGoodsList.pop(idx)
                    })
                } else {
                    heartIconEl.classList.add(styles.heartIconTagged)
                    tagGoodsList.push(this.#goodsData)
                }
    
                localStorage.setItem(GoodsFloatingLayer.TAG_GOODS_LIST_KEY, JSON.stringify(tagGoodsList))
            } else {
                const recentGoodsList = JSON.parse(localStorage.getItem(GoodsFloatingLayer.RECENT_GOODS_LIST_KEY))
                let isDuplicate = false
                
                this.#checkIfSameGoodsDataExists(recentGoodsList, this.#goodsData, () => {
                    isDuplicate = true
                })
    
                if (!isDuplicate) {
                    recentGoodsList.push(this.#goodsData)
                    localStorage.setItem(GoodsFloatingLayer.RECENT_GOODS_LIST_KEY, JSON.stringify(recentGoodsList))
                }
            }
        })
    }
    
    set goodsData(newGoodsData) {
        this.#goodsData = newGoodsData
    }
    
}