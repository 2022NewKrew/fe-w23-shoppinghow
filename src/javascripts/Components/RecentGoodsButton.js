import Component from '../Core/Component'
import styles from '../../scss/ComponentStyles/RecentGoodsButton.module.scss'
import RecentGoodsFloatingLayer from './RecentGoodsFloatingLayer'

export default class RecentGoodsButton extends Component {
    
    static #TIME_UNTIL_HIDDEN_IF_MOUSE_OUT = 500
    
    #goodsFloatingLayer
    
    constructor() {
        const recentGoodsFloatingLayer = new RecentGoodsFloatingLayer()
        
        super(`
            <div class="${ styles.buttonBox }">
                <div class="${ styles.buttonText }">최근 본 상품</div>
                <div data-component="RecentGoodsFloatingLayer"></div>
            </div>
        `, {
            'RecentGoodsFloatingLayer': recentGoodsFloatingLayer
        })
        
        this.#goodsFloatingLayer = recentGoodsFloatingLayer
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