import Component from '../Component'
import styles from '../../scss/ComponentStyles/RecentGoodsButton.module.scss'
import GoodsFloatingLayer from './GoodsFloatingLayer'

export default class RecentGoodsButton extends Component {
    
    static #TIME_UNTIL_HIDDEN_IF_MOUSE_OUT = 500
    
    #goodsFloatingLayer
    
    constructor() {
        const goodsFloatingLayer = new GoodsFloatingLayer()
        
        super(`
            <div class="${ styles.buttonBox }">
                <div class="${ styles.buttonText }">최근 본 상품</div>
                <div data-component="GoodsFloatingLayer"></div>
            </div>
        `, {
            'GoodsFloatingLayer': goodsFloatingLayer
        })
        
        this.#goodsFloatingLayer = goodsFloatingLayer
        this.#goodsFloatingLayer.hide()
        
        this.#setHoverEventListener()
    }
    
    #setHoverEventListener() {
        let timeId
        
        this.rootEl.addEventListener('mouseover', () => {
            this.#goodsFloatingLayer.show()
            clearTimeout(timeId)
        })
        
        this.rootEl.addEventListener('mouseout', () => {
            timeId = setTimeout(() => {
                this.#goodsFloatingLayer.hide()
            }, RecentGoodsButton.#TIME_UNTIL_HIDDEN_IF_MOUSE_OUT)
        })
    }
    
    update() {
    
    }
    
}