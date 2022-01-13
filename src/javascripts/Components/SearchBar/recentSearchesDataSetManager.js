import DataSetManager from '../../Core/DataSetManager'

/**
 * 최근 검색어를 관리
 */
class RecentSearchesDataSetManager extends DataSetManager {
    
    /**
     * 저장할 최대 검색어 수
     * @type {number}
     */
    static #MAX_NUMBER_OF_DATA = 10
    
    /**
     * @param {string} localStorageKey - local storage에 저장할 때 사용될 key
     */
    constructor(localStorageKey) {
        super(localStorageKey)
    }
    
    /**
     * 최근 검색어 정보를 MAX_NUMBER_OF_DATA만큼까지만 저장
     */
    #limitUp() {
        while (this.data.length > RecentSearchesDataSetManager.#MAX_NUMBER_OF_DATA) {
            this.data.pop()
        }
    }
    
    /**
     * 최근 검색어를 추가, Stack 방식으로 추가됨. (가장 나중에 추가한 것이 가장 앞에 있음)
     * @param {string} searchesToAdd - 추가할 검색어
     */
    addData(searchesToAdd) {
        let isExists = this.checkIfExists(searchesToAdd)
    
        // 이미 추가된 검색어는 가장 앞으로 이동시켜야 하므로 우선 삭제 후 추가
        if (isExists) {
            this.removeData(searchesToAdd)
        }
        
        // 가장 앞에 검색어를 추가
        this.data.splice(0, 0, searchesToAdd)
        this.notify()
        
        this.#limitUp()
    }
}

/**
 * @type {RecentSearchesDataSetManager}
 */
export const recentSearchedDataSetManager = new RecentSearchesDataSetManager('recentSearchesData')