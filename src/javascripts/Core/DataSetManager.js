import Observable from './Observable'
import { pullFromLocalStorage, pushToLocalStorage } from '../Common/localStorageUtil'

/**
 * 데이터를 Set 자료 구조에 저장하고 관리
 */
export default class DataSetManager extends Observable {
    
    /**
     * @param {string} localStorageKey - local storage에 저장할 때 사용될 key
     */
    constructor(localStorageKey) {
        super()
        
        // 생성 시 local storage로부터 데이터 가져오기
        const dataList = pullFromLocalStorage(localStorageKey)
        
        // local storage에 데이터가 없다면 빈 배열로 지정
        if (dataList) {
            this.data = dataList
        } else {
            this.data = []
        }
        
        // 브라우저 종료 전에 데이터를 local storage에 저장
        window.addEventListener('beforeunload', () => {
            pushToLocalStorage(localStorageKey, this.data)
        })
    }
    
    /**
     * 데이터를 set에 추가, 중복 시 추가 안함 (이 경우 notify 호출x)
     * @param {any} dataToAdd - 추가할 데이터
     */
    addData(dataToAdd) {
        if (!this.checkIfExists(dataToAdd)) {
            this.data.push(dataToAdd)
            this.notify()
        }
    }
    
    /**
     * set에서 dataToRemove와 같은 데이터를 삭제
     * 같은지 아닌지 판단은 checkIfSame 메서드가 함
     * @param {any} dataToRemove - 삭제할 데이터
     */
    removeData(dataToRemove) {
        this.data.forEach((dataInList, idx) => {
            if (this.checkIfSame(dataToRemove, dataInList)) {
                this.data.splice(idx, 1)
                this.notify()
                return false
            }
        })
    }
    
    /**
     * set에 dataToCompare과 같은 데이터가 있는지 확인하고 결과를 반환
     * 같은지 아닌지 판단은 checkIfSame 메서드가 함
     * @param {any} dataToCompare - 비교할 데이터
     * @returns {boolean} - dataToCompare과 같은 데이터가 있는 경우 true, 아닌 경우 false
     */
    checkIfExists(dataToCompare) {
        let isExists = false
        
        this.data.forEach((dataInList) => {
            if (this.checkIfSame(dataToCompare, dataInList)) {
                isExists = true
                return false
            }
        })
        
        return isExists
    }
    
    /**
     * set에 저장된 모든 데이터 삭제
     */
    clearData() {
        this.data = []
        this.notify()
    }
    
    /**
     * 두 데이터가 같은지 아닌지 판단
     * @param {any} data1 - 비교할 데이터1
     * @param {any} data2 - 비교할 데이터2
     * @returns {boolean} - 두 데이터가 같다면 true, 다르다면 false
     */
    checkIfSame(data1, data2) {
        return data1 === data2
    }

}