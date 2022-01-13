import DataSetManager from '../../Core/DataSetManager'

class GoodsDataSetManager extends DataSetManager {
    
    constructor(localStorageKey) {
        super(localStorageKey)
    }
    
    checkIfSame(data1, data2) {
        return data1.title === data2.title
            && data1.imgSrc === data2.imgSrc
            && data1.price === data2.price
    }
    
}

export const recentlyViewedGoodsDataSetManager = new GoodsDataSetManager('recentlyViewedGoodsData')
export const taggedGoodsDataSetManager = new GoodsDataSetManager('taggedGoodsData')