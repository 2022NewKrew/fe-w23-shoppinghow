import styles from '../scss/input_with_top_rankng_goods.module.scss'
import RollingText from './RollingText'

export default class InputWithTopRankingGoods {
    
    #ROLLING_PERIOD = 4000
    #FOCUS_OUT_TIME_IF_MOUSE_OUT = 500
    
    #TOP_10_GOODS_JSON_URL = 'http://localhost:3000/json/top-10-goods.json'
    
    #rootEl
    #rollingText
    
    constructor() {
        const getHTML = () => {
            return `
                <form>
                    <input type="text" class="${ styles.searchInput }">
                    <button class="${ styles.searchIcon }">🔍</button>
                </form>
            `
        }
        
        const createElement = () => {
            this.#rootEl = document.createElement('div')
            this.#rootEl.classList.add(styles.component)
            
            this.#rootEl.innerHTML = getHTML()
        }
        
        const fetchTopGoodsData = (callbackAfterFetch) => {
            fetch(this.#TOP_10_GOODS_JSON_URL)
                .then((res) => {
                    res.json().then(callbackAfterFetch)
                })
        }
        
        const createRollerText = () => {
            fetchTopGoodsData((topGoodsData) => {
                this.#rollingText = new RollingText(topGoodsData, this.#ROLLING_PERIOD)
                this.#rootEl.insertBefore(this.#rollingText.rootEl, this.#rootEl.firstChild)
            })
        }
        
        const setEventToDoNotShowRollerIfFocused = () => {
            const inputEl = this.#rootEl.querySelector(`.${ styles.searchInput }`)
            let timeId
    
            inputEl.addEventListener('focusin', () => {
                this.#rollingText.rootEl.style.visibility = 'hidden'
                this.#rollingText.stopAutoRolling()
            })
    
            inputEl.addEventListener('focusout', () => {
                this.#rollingText.rootEl.style.visibility = 'visible'
                this.#rollingText.startAutoRolling()
            })
            
            inputEl.addEventListener('mouseenter', () => {
                clearTimeout(timeId)
            })
    
            inputEl.addEventListener('mouseout', () => {
                timeId = setTimeout(() => {
                    inputEl.blur()
                }, this.#FOCUS_OUT_TIME_IF_MOUSE_OUT)
            })
        }
        
        createElement()
        createRollerText()
        setEventToDoNotShowRollerIfFocused()
    }
    
    get rootEl() {
        return this.#rootEl
    }
    
}