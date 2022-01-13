import styles from '../../scss/ComponentStyles/InputWithTopRankingGoods.module.scss'
import RollingText from './RollingText'
import Component from '../Core/Component'
import FloatingLayer from './FloatingLayer'
import SearchAssistant from './SearchAssistant'
import { recentSearchedDataSetManager } from '../Data/recentSearchesDataSetManager'

export default class InputWithTopRankingGoods extends Component {
    
    static #ROLLING_PERIOD = 4000
    static #FOCUS_OUT_TIME_IF_MOUSE_OUT = 500
    static #TOP_10_GOODS_JSON_URL = 'http://localhost:3000/json/top-10-goods.json'
    
    #floatingLayer
    #searchAssistant
    
    
    constructor() {
        const rollingText = new RollingText([], InputWithTopRankingGoods.#ROLLING_PERIOD)
        const searchAssistant = new SearchAssistant()
        const floatingLayer = new FloatingLayer(searchAssistant, {
            zIndex: 200
        })
        
        super(`
            <div class="${ styles.component }">
                <div class="${ styles.container }">
                    <form>
                        <input type="text" class="${ styles.searchInput }">
                        <button class="${ styles.searchIcon }">🔍</button>
                    </form>
                    <div data-component="RollingText"></div>
                </div>
                <div data-component="FloatingLayer"></div>
            </div>
        `, {
            'RollingText': rollingText,
            'FloatingLayer': floatingLayer
        })
        
        this.#searchAssistant = searchAssistant
        this.#floatingLayer = floatingLayer
        
        this.#floatingLayer.hide()
        
        this.#passTopGoodsDataToRollingText(rollingText)
        this.#setEventToDoNotShowRollerIfFocused(rollingText)
        this.#setKeyEventHandler()
    }
    
    
    update() {
    }
    
    #fetchTopGoodsData(callbackAfterFetch) {
        fetch(InputWithTopRankingGoods.#TOP_10_GOODS_JSON_URL)
            .then((res) => {
                res.json()
                    .then(callbackAfterFetch)
            })
    }
    
    #passTopGoodsDataToRollingText(rollingText) {
        this.#fetchTopGoodsData((topGoodsData) => {
            rollingText.texts = topGoodsData
        })
    }
    
    #setKeyEventHandler() {
        const inputEl = this.rootEl.querySelector(`.${ styles.searchInput }`)
        
        inputEl.addEventListener('keydown', ({ key }) => {
            if (key === 'Enter') {
                const searches = inputEl.value
                
                recentSearchedDataSetManager.addData(searches)
            }
        })
    }
    
    #setEventToDoNotShowRollerIfFocused(rollingText) {
        const inputEl = this.rootEl.querySelector(`.${ styles.searchInput }`)
        let timeId
        
        this.rootEl.addEventListener('focusin', () => {
            this.#focusin(rollingText)
        })
        
        window.addEventListener('mousedown', (event) => {
            if (!this.rootEl.contains(event.target)) {
                this.#focusout(inputEl, rollingText)
            }
        })
        
        this.rootEl.addEventListener('mouseenter', () => {
            clearTimeout(timeId)
        })
        
        this.rootEl.addEventListener('mouseleave', ({ target }) => {
            timeId = setTimeout(() => {
                this.#focusout(inputEl, rollingText)
            }, InputWithTopRankingGoods.#FOCUS_OUT_TIME_IF_MOUSE_OUT)
        })
        
        this.#floatingLayer.rootEl.addEventListener('click', (event) => {
            event.preventDefault()
            event.stopPropagation()
        })
    }
    
    #focusin(rollingText) {
        rollingText.hide()
        this.#floatingLayer.show()
    
        this.rootEl.classList.add(styles.highlightBorder)
    }
    
    #focusout(inputEl, rollingText) {
        if (inputEl.value === '') {
            rollingText.show()
        }
        
        inputEl.blur()
        this.#floatingLayer.hide()
    
        this.rootEl.classList.remove(styles.highlightBorder)
    }
    
}