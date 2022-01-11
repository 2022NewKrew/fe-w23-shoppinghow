import { getCarouselImgs } from "@api";

export class ImgCarouselModel {
    constructor() {
        this.numofImgs;
        this.carouselImgs = [];
    }

    async init() {
        const { length, imageURL } = await getCarouselImgs();
        [this.numofImgs, this.carouselImgs] = [length, imageURL];
    }

    getCarouselImgs() {
        return this.carouselImgs;
    }
}
