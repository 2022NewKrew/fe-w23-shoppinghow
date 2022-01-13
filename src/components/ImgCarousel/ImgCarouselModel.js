import { getCarouselImgs } from "@api";

export class ImgCarouselModel {
    constructor() {
        this.numofImgs;
        this.currentIdx = 0;
        this.carouselImgs = [];
    }

    async init() {
        const { length, imageURL } = await getCarouselImgs();
        [this.numofImgs, this.carouselImgs] = [length, imageURL];
        this.unshiftLastElementAndPushFirstElement();
    }

    unshiftLastElementAndPushFirstElement() {
        this.carouselImgs = [
            this.carouselImgs[this.numofImgs - 1], ...this.carouselImgs, this.carouselImgs[0]
        ];
    }

    getNumOfImgs() {
        return this.numofImgs;
    }

    getCarouselImgs() {
        return this.carouselImgs;
    }

    getCurrentIdx() {
        return this.currentIdx;
    }

    setCurrentIdx(idx) {
        this.currentIdx = idx;
    }
}
