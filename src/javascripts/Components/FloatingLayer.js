import Component from '../Core/Component'
import styles from '../../scss/ComponentStyles/FloatingLayer.module.scss'

export default class FloatingLayer extends Component {
    
    #option
    
    #floatingLayerEl
    
    constructor(componentOnLayer, userOption) {
        super(`
            <div class="${ styles.floatingLayerBenchmark }">
                <div class="${ styles.floatingLayer }">
                    <div data-component="componentOnLayer"></div>
                </div>
            </div>
        `, {
            'componentOnLayer': componentOnLayer
        })
        
        const defaultOption = {
            zIndex: 100,
            leftAlign: true,
            rightAlign: false
        }
        
        this.#option = { ...defaultOption, ...userOption }
        
        this.#floatingLayerEl = this.rootEl.querySelector(`.${ styles.floatingLayer }`)
    }
    
    
    update() {
        this.#floatingLayerEl.style.zIndex = this.#option.zIndex
        
        if (this.#option.leftAlign) {
            this.#floatingLayerEl.style.left = '0'
        }
    
        if (this.#option.rightAlign) {
            this.#floatingLayerEl.style.right = '0'
        }
    }
    
}