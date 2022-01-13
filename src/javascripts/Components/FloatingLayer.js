import Component from '../Core/Component'
import styles from '../../scss/ComponentStyles/FloatingLayer.module.scss'

/**
 * 부모 밑에 layer을 띄워주는 컴포넌트
 */
export default class FloatingLayer extends Component {
    
    #option
    
    #floatingLayerEl
    
    
    /**
     * @param {Component} componentOnLayer - layer위에 표시할 컴포넌트
     * @param {object?} userOption - 몇가지 특성을 세부적으로 정할 객체
     * @param {number?} userOption.zIndex - (기본값: 100) layer의 zIndex 속성값
     * @param {boolean?} userOption.leftAlign - (기본값: true) layer을 왼쪽으로 정렬할 것인지 여부
     * @param {boolean?} userOption.rightAlign - (기본값: false) layer을 오른쪽으로 정렬할 것인지 여부
     */
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
        
        this.update()
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