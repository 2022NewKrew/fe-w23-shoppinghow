import Component from '../Core/Component'
import styles from '../../scss/ComponentStyles/RecentGoodsButton.module.scss'
import RecentAndTaggedGoodsTab from './RecentAndTaggedGoodsTab'
import FloatingLayer from './FloatingLayer'

export default class RecentGoodsButton extends Component {
    
    static #TIME_UNTIL_HIDDEN_IF_MOUSE_OUT = 500
    
    #floatingLayer
    
    constructor() {
        const floatingLayer = new FloatingLayer(new RecentAndTaggedGoodsTab(), {
            leftAlign: false,
            rightAlign: true
        })
        
        super(`
            <div class="${ styles.buttonBox }">
                <div class="${ styles.buttonText }">최근 본 상품</div>
                <div data-component="floatingLayer"></div>
            </div>
        `, {
            'floatingLayer': floatingLayer
        })
        
        this.#floatingLayer = floatingLayer
        this.#floatingLayer.hide()
        
        this.#setHoverEventListener()
    }
    
    #setHoverEventListener() {
        let timeId
        
        this.rootEl.addEventListener('mouseover', () => {
            this.#floatingLayer.show()
            clearTimeout(timeId)
        })
        
        this.rootEl.addEventListener('mouseout', () => {
            timeId = setTimeout(() => {
                this.#floatingLayer.hide()
            }, RecentGoodsButton.#TIME_UNTIL_HIDDEN_IF_MOUSE_OUT)
        })
    }
    
    update() {
    
    }
    
}