import styles from '../../scss/rolling_text.module.scss'
import Component from '../Component'

const TRANSITION_DURATION = 700

export default class RollingText extends Component {
    
    #currentIdx = 0
    #texts
    #rollingPeriod
    
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
        
        this.#textItemEls = this.rootEl.querySelectorAll(`.${ styles.textItem }`)
        
        const initRollerElement = () => {
            const rollerEl = this.rootEl.querySelector(`.${ styles.textRoller }`)
            
            rollerEl.addEventListener('transitionend', () => {
                rollerEl.style.transitionDuration = '0ms'
                rollerEl.style.transform = 'translateY(0)'
                
                this.#renewText()
            })
        }
        
        initRollerElement()
        this.#renewText()
        this.startAutoRolling()
    }
    
    #renewText() {
        this.#textItemEls.forEach((textItemEl, elIdx) => {
            const idxToShow = this.#currentIdx + elIdx < this.#texts.length ? this.#currentIdx + elIdx : 0
            const textToShow = this.#texts[idxToShow]
            const ranking = idxToShow + 1
            
            textItemEl.innerText = `${ ranking } ${ textToShow }`
        })
    }
    
    startAutoRolling() {
        const roll = () => {
            const rollerEl = this.rootEl.querySelector(`.${ styles.textRoller }`)
            
            rollerEl.style.transitionDuration = `${ TRANSITION_DURATION }ms`
            rollerEl.style.transform = `translateY(-${ styles.height })`
            
            this.#currentIdx++
            
            if (this.#currentIdx >= this.#texts.length) {
                this.#currentIdx = 0
            }
        }
        
        this.#autoRollingIntervalId = setInterval(roll, this.#rollingPeriod)
    }
    
    stopAutoRolling() {
        clearInterval(this.#autoRollingIntervalId)
    }
    
    set texts(newTexts) {
        this.#texts = newTexts
        this.#renewText()
    }
    
}