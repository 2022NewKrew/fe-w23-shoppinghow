import Component from '../Component'
import styles from '../../scss/ComponentStyles/GoodsCard.scss'
import GoodsDataManager from '../GoodsDataManager'

export default class GoodsCard extends Component {
    
    #goodsData
    
    #imgEl
    #titleEl
    #priceNumEl
    
    constructor(goodsData) {
        super(`
            <li class="${ styles.cardContainer }">
                <div class="${ styles.card }">
                    <div class="${ styles.imgBox }">
                        <img src="//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895" alt="">
                    </div>
                    <div class="${ styles.descriptionBox }">
                        <div class="${ styles.title }"></div>
                        <div class="${ styles.detailBox }">
                            <div class="${ styles.price }">
                                <span class="${ styles.priceNum }"></span>
                                <span class="${ styles.priceUnit }">원</span>
                            </div>
                            <div class="${ styles.heartIcon }">
                        </div>
                    </div>
                </div>
            </div>
        `)
        
        this.#goodsData = goodsData
        
        this.#imgEl = this.rootEl.querySelector('img')
        this.#titleEl = this.rootEl.querySelector(`.${ styles.title }`)
        this.#priceNumEl = this.rootEl.querySelector(`.${ styles.priceNum }`)
        
        this.#addTaggedClassIfTaggedGoods()
        this.#setClickEventListener()
        this.update()
    }
    
    update() {
        this.#imgEl.src = this.#goodsData.imgSrc
        this.#titleEl.innerText = this.#goodsData.title
        this.#priceNumEl.innerText = this.#goodsData.price
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
        this.update()
    }
    
}