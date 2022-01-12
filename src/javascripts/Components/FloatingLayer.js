import Component from '../Core/Component'
import styles from '../../scss/ComponentStyles/FloatingLayer.module.scss'

export default class FloatingLayer extends Component {
    
    #option
    
    
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
            zIndex: 100
        }
        
        this.#option = { ...defaultOption, ...userOption }
    }
    
    
    update() {
        this.rootEl.style.zIndex = this.#option.zIndex
    }
    
}