import Component from '../Core/Component'
import styles from '../../scss/ComponentStyles/FloatingLayer.module.scss'

export default class FloatingLayer extends Component {
    
    constructor(componentOnLayer, option) {
        super(`
            <div class="${ styles.floatingLayerBenchmark }">
                <div class="${ styles.floatingLayer }">
                    <div data-component="componentOnLayer"></div>
                </div>
            </div>
        `, {
            'componentOnLayer': componentOnLayer
        })
    
        if (option) {
            this.#setOption(option)
        }
    }
    
    
    #setOption(option) {
        if (option.zIndex) {
            this.rootEl.style.zIndex = option.zIndex
        }
    }
    
    update() {
    
    }
    
}