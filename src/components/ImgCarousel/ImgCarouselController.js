import { Controller } from "@core";

export class ImgCarouselController extends Controller {
    
    init() {
        const carouselImgs = this.model.getCarouselImgs();
        const imageCarouselDOM = this.view.createImgCarousel(carouselImgs);
        this.view.mount({
            parentClassName: "carousel_image_wrap",
            childNode: imageCarouselDOM
        });
    }

    slidingCarousel(target, horizontalMove) {
        const beforeX = parseInt(getComputedStyle(target).left.split("px")[0]);
        target.style.left = `${beforeX + horizontalMove}px`;
    }


    setEvent() {
        const carouselImages = this.view.getDOMByClassName("carousel_image_wrap");
        const showLeftImgButton = this.view.getDOMByClassName("planning__left-btn");
        const showRightImgButton = this.view.getDOMByClassName("planning__right-btn");

        showLeftImgButton.addEventListener("click", () => {
            this.slidingCarousel(carouselImages, 600);
        });

        showRightImgButton.addEventListener("click", () => {
            this.slidingCarousel(carouselImages, -600);
        });
    }
}
