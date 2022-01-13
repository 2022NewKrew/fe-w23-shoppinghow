import Component from '../Core/Component'
import styles from '../../scss/ComponentStyles/RecentSearches.module.scss'
import { recentSearchedDataSetManager } from '../Data/recentSearchesDataSetManager'

/**
 * 최근 검색어를 보여주는 컴포넌트
 */
export default class RecentSearches extends Component {
    
    /**
     * @callback listenerIfClickSearches
     * @param {string} searches - 클릭된 검색어
     */
    
    /**
     * 최근 검색어가 클릭되면 실행할 콜백 함수
     * @type listenerIfClickSearches
     */
    #listenerIfClickSearches
    
    /**
     * 검색어를 갖고 있는 모든 element
     * @type array
     */
    #searchesItemEls
    
    /**
     * @param {listenerIfClickSearches?} listenerIfClickSearches - 최근 검색어가 클릭되면 실행할 콜백 함수
     */
    constructor(listenerIfClickSearches) {
        super(`
            <div class="${ styles.container }">
                <div class="${ styles.title }">최근 검색어</div>
                <ul class="${ styles.searchesList }">
                    <li class="${ styles.searchesItem }">
                        <span class="${ styles.searchesText }"></span>
                        <span class="${ styles.deleteBtn }"></span>
                    </li>
                    <li class="${ styles.searchesItem }">
                        <span class="${ styles.searchesText }"></span>
                        <span class="${ styles.deleteBtn }"></span>
                    </li>
                    <li class="${ styles.searchesItem }">
                        <span class="${ styles.searchesText }"></span>
                        <span class="${ styles.deleteBtn }"></span>
                    </li>
                    <li class="${ styles.searchesItem }">
                        <span class="${ styles.searchesText }"></span>
                        <span class="${ styles.deleteBtn }"></span>
                    </li>
                    <li class="${ styles.searchesItem }">
                        <span class="${ styles.searchesText }"></span>
                        <span class="${ styles.deleteBtn }"></span>
                    </li>
                </ul>
            </div>
        `)
        
        this.#listenerIfClickSearches = listenerIfClickSearches
        this.#searchesItemEls = this.rootEl.querySelectorAll(`.${ styles.searchesItem }`)
        
        this.#setEventHandler()
        this.#setRecentSearchesChangedEventListener()
        
        this.update()
    }
    
    
    /**
     * 이벤트 핸들러 설정
     */
    #setEventHandler() {
        this.#searchesItemEls.forEach((searchesItemEl) => {
            const searchesTextEl = searchesItemEl.firstElementChild
            const deleteBtnEl = searchesItemEl.lastElementChild
            
            searchesTextEl.addEventListener('click', this.#notifyIfClickSearches.bind(this))
            deleteBtnEl.addEventListener('click', this.#removeSearches.bind(this))
        })
    }
    
    /**
     * 검색어를 삭제
     * @param {HTMLElement} target - 삭제할 target
     */
    #removeSearches({ target }) {
        const searchesTextEl = target.parentElement.firstElementChild
        const searches = searchesTextEl.innerText
        
        recentSearchedDataSetManager.removeData(searches)
        this.update()
    }
    
    /**
     * 검색어가 클릭된 것을 리스너에게 알림
     * @param searches
     */
    #notifyIfClickSearches(searches) {
        this.#listenerIfClickSearches(searches)
    }
    
    /**
     * 최근 검색어 데이터 변경 이벤트를 구독
     */
    #setRecentSearchesChangedEventListener() {
        recentSearchedDataSetManager.subscribe(() => {
            this.update()
        })
    }
    
    /**
     * @param {listenerIfClickSearches} listener
     */
    set listenerIfClickSearches(listener) {
        this.#listenerIfClickSearches = listener
    }
    
    update() {
        // 모든 표시된 검색어를 업데이트
        this.#searchesItemEls.forEach((searchesItemEl, idx) => {
            const searchesTextEl = searchesItemEl.firstElementChild
            const deleteBtnEl = searchesItemEl.lastElementChild
            
            if (recentSearchedDataSetManager.data[idx]) {
                searchesTextEl.innerText = recentSearchedDataSetManager.data[idx]
            } else {
                searchesTextEl.innerText = ''
            }
    
            if (searchesTextEl.innerText === '') {
                deleteBtnEl.style.background = 'none'
            } else {
                deleteBtnEl.style.background = ''
            }
        })
    }
    
}