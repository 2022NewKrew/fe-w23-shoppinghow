import styles from '../../scss/ComponentStyles/RollingText.scss'
import Component from '../Component'

export default class RollingText extends Component {
    
    static #TRANSITION_DURATION = 700
    
    #currentIdx = 0
    #texts
    #rollingPeriod
    
    #rollerEl
    #textItemEls
    
    #autoRollingIntervalId
    
    constructor(texts, rollingPeriod) {
        super(`
            <div class="${ styles.component }">
                <div class="${ styles.textRoller }">
                    <div class="${ styles.textItem }"></div>
                    <div class="${ styles.textItem }"></div>
                </div>
            </div>
        `)
        
        this.#texts = texts
        this.#rollingPeriod = rollingPeriod
        
        this.#rollerEl = this.rootEl.querySelector(`.${ styles.textRoller }`)
        
        this.#textItemEls = this.rootEl.querySelectorAll(`.${ styles.textItem }`)
        
        this.#initTextRollerElement()
        this.update()
        this.startAutoRolling()
    }
    
    #initTextRollerElement() {
        this.#rollerEl.addEventListener('transitionend', () => {
            this.#rollerEl.style.transitionDuration = '0ms'
            this.#rollerEl.style.transform = 'translateY(0)'
            
            this.update()
        })
    }
    
    update() {
        this.#textItemEls.forEach((textItemEl, elIdx) => {
            const idxToShow = this.#currentIdx + elIdx < this.#texts.length ? this.#currentIdx + elIdx : 0
            const textToShow = this.#texts[idxToShow]
            const ranking = idxToShow + 1
            
            textItemEl.innerText = `${ ranking } ${ textToShow }`
        })
    }
    
    startAutoRolling() {
        const roll = () => {
            this.#rollerEl.style.transitionDuration = `${ RollingText.#TRANSITION_DURATION }ms`
            this.#rollerEl.style.transform = `translateY(-${ styles.height })`
            
            this.#currentIdx++
            
            if (this.#currentIdx >= this.#texts.length) {
                this.#currentIdx = 0
            }
        }
        
        this.#autoRollingIntervalId = setInterval(roll, this.#rollingPeriod)
    }
    
    stopAutoRolling() {
        clearInterval(this.#autoRollingIntervalId)
        this.#rollerEl.style.transitionDuration = '0ms'
    }
    
    show() {
        super.show()
        
        this.startAutoRolling()
    }
    
    hide() {
        super.hide()
        
        this.stopAutoRolling()
    }
    
    set texts(newTexts) {
        this.#texts = newTexts
        this.update()
    }
    
}