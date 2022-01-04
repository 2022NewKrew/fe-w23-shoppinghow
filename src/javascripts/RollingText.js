import styles from '../scss/rolling_text.module.scss'

export default class RollingText {
    
    #TRANSITION_DURATION = 700
    
    #currentIdx = 0
    #texts
    #rollingPeriod
    
    #rootEl
    #textItemEls
    
    #autoRollingIntervalId
    
    constructor(texts, rollingPeriod) {
        this.#texts = texts
        this.#rollingPeriod = rollingPeriod
        
        const getHTML = () => {
            return `
                <div class="${ styles.textRoller }">
                    <div class="${ styles.textItem }"></div>
                    <div class="${ styles.textItem }"></div>
                </div>
            `
        }
        
        const createElement = () => {
            this.#rootEl = document.createElement('div')
            this.#rootEl.classList.add(styles.component)
            
            this.#rootEl.innerHTML = getHTML()
            this.#textItemEls = this.#rootEl.querySelectorAll(`.${ styles.textItem }`)
        }
        
        const initRollerElement = () => {
            const rollerEl = this.#rootEl.querySelector(`.${ styles.textRoller }`)
            
            rollerEl.addEventListener('transitionend', () => {
                rollerEl.style.transitionDuration = '0ms'
                rollerEl.style.transform = 'translateY(0)'
                
                this.#renewText()
            })
        }
        
        createElement()
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
            const rollerEl = this.#rootEl.querySelector(`.${ styles.textRoller }`)
            
            rollerEl.style.transitionDuration = `${ this.#TRANSITION_DURATION }ms`
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
    
    get rootEl() {
        return this.#rootEl
    }
    
}