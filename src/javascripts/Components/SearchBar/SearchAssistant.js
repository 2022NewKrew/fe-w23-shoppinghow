import Component from '../../Core/Component'
import styles from './styles/SearchAssistant.module.scss'
import RecentSearches from './RecentSearches'

/**
 * 입력창 아래에 띄워져서 최근 검색어, 인기 키워드 등을 보여주어 검색을 돕는 컴포넌트
 */
export default class SearchAssistant extends Component {
    
    /**
     * 어떤 컴포넌트를 보여줄지에 대한 정보
     * @typedef {object} componentOption
     * @property {boolean} recentSearches
     * @property {boolean} popularKeywords
     * @property {boolean} relatedSearches
     */
    
    /** @type {Component} */
    #recentSearches
    /** @type {Component} */
    #popularKeywords
    /** @type {Component} */
    #relatedSearches
    
    /** @type {componentOption} */
    #option
    
    /**
     * @param {componentOption?} userOption - 어떤 컴포넌트를 보여줄지에 대한 정보
     */
    constructor(userOption) {
        const recentSearches = new RecentSearches()
        
        super(`
            <div class="${ styles.container }">
                <div data-component="RecentSearches"></div>
            </div>
        `, {
            "RecentSearches": recentSearches
        })
        
        this.#recentSearches = recentSearches
        
        this.#option = {
            recentSearches: true,
            popularKeywords: true,
            relatedSearches: false,
            ...userOption
        }
    }
    
    /**
     * @param {componentOption} option
     */
    set option(option) {
        this.#option = { ...this.#option, ...option }
        this.update()
    }
    
    update() {
        if (this.#option.recentSearches) {
            this.#recentSearches.show()
        } else {
            this.#recentSearches.hide()
        }
        
        if (this.#option.popularKeywords) {
            this.#popularKeywords.show()
        } else {
            this.#popularKeywords.hide()
        }
        
        if (this.#option.relatedSearches) {
            this.#relatedSearches.show()
        } else {
            this.#relatedSearches.hide()
        }
    }
    
}