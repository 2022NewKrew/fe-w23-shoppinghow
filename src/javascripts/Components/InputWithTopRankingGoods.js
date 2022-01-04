import styles from '../../scss/input_with_top_rankng_goods.module.scss'
import RollingText from './RollingText'
import Component from '../Component'

const ROLLING_PERIOD = 4000
const FOCUS_OUT_TIME_IF_MOUSE_OUT = 500
const TOP_10_GOODS_JSON_URL = 'http://localhost:3000/json/top-10-goods.json'

export default class InputWithTopRankingGoods extends Component {
    
    constructor() {
        const rollingText = new RollingText([], ROLLING_PERIOD)
        
        super(`
            <div class="${ styles.component }">
                <form>
                    <input type="text" class="${ styles.searchInput }">
                    <button class="${ styles.searchIcon }">🔍</button>
                </form>
                <div data-component="RollingText"></div>
            </div>
        `, {
            'RollingText': rollingText
        })
        
        this.#passTopGoodsDataToRollingText(rollingText)
        this.#setEventToDoNotShowRollerIfFocused(rollingText)
    }
    
    #fetchTopGoodsData(callbackAfterFetch) {
        fetch(TOP_10_GOODS_JSON_URL)
            .then((res) => {
                res.json().then(callbackAfterFetch)
            })
    }
    
    #passTopGoodsDataToRollingText(rollingText) {
        this.#fetchTopGoodsData((topGoodsData) => {
            rollingText.texts = topGoodsData
        })
    }
    
    #setEventToDoNotShowRollerIfFocused(rollingText) {
        const inputEl = this.rootEl.querySelector(`.${ styles.searchInput }`)
        let timeId
    
        inputEl.addEventListener('focusin', () => {
            rollingText.rootEl.style.visibility = 'hidden'
            rollingText.stopAutoRolling()
        
            this.rootEl.style.borderColor = 'rgba(255, 0, 0, 0.5)'
        })
    
        inputEl.addEventListener('focusout', () => {
            rollingText.rootEl.style.visibility = 'visible'
            rollingText.startAutoRolling()
        
            this.rootEl.style.borderColor = ''
        })
    
        inputEl.addEventListener('mouseenter', () => {
            clearTimeout(timeId)
        })
    
        inputEl.addEventListener('mouseout', () => {
            timeId = setTimeout(() => {
                inputEl.blur()
            }, FOCUS_OUT_TIME_IF_MOUSE_OUT)
        })
    }
    
}