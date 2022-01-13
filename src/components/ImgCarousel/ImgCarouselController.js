import { Controller } from "@core";
import { rotateComponent, throttle } from "@utils";

export class ImgCarouselController extends Controller {
    init() {
        const carouselImgs = this.model.getCarouselImgs();
        const imageCarouselDOM = this.view.createImgCarousel(carouselImgs);
        this.view.mount({
            parentClassName: "carousel_image_wrap",
            childNode: imageCarouselDOM
        });
    }

    getCurrentIdx(operation) {
        const nowImgIdx = this.model.getCurrentIdx();
        const numOfImg = this.model.getNumOfImgs();
        if (operation === "plus") {
            return nowImgIdx + 1 === numOfImg 
                ? 0
                : nowImgIdx + 1;
        }
        return nowImgIdx - 1 < 0
            ? numOfImg - 1
            : nowImgIdx - 1;
    }

    beforeRotateComponent({ target, moveDegree, initialPosition, moveDirection, lastListPosition, transitionDelay, currentIdx }) {
        rotateComponent(target, moveDegree, initialPosition, moveDirection, lastListPosition, transitionDelay);
        this.view.getAllDOMByClassName("planning_small_button")[this.model.getCurrentIdx()].classList.remove("active");
        this.view.getAllDOMByClassName("planning_small_button")[currentIdx].classList.add("active");
        this.model.setCurrentIdx(currentIdx);
    }

    setEvent() {
        const carouselImages = this.view.getDOMByClassName("carousel_image_wrap");
        const slideCarouselImgButtons = this.view.getDOMByClassName("planning_buttons");
        const slideCarouselBottomButtons = this.view.getDOMByClassName("planning_small_buttons_wrap");

        slideCarouselImgButtons.addEventListener("click", throttle(({ target }) => {
            if (target.classList.contains("planning__left-btn")) {
                this.beforeRotateComponent({
                    target: carouselImages, 
                    moveDegree: -600, 
                    initialPosition: -1800, 
                    moveDirection: "left", 
                    lastListPosition: -600, 
                    transitionDelay: 300,
                    currentIdx: this.getCurrentIdx("minus")
                });
                return;
            }
            this.beforeRotateComponent({
                target: carouselImages, 
                moveDegree: 600, 
                initialPosition: -600, 
                moveDirection: "left", 
                lastListPosition: -1800, 
                transitionDelay: 300,
                currentIdx: this.getCurrentIdx("plus")
            });
        }, 300));

        slideCarouselBottomButtons.addEventListener("click", ({ target }) => {
            const nowImgIdx = this.model.getCurrentIdx();
            if (target.dataset.idx === nowImgIdx) {
                return;
            }
            if (target.dataset.idx - nowImgIdx > 0) {
                this.beforeRotateComponent({
                    target: carouselImages, 
                    moveDegree: 600 * (target.dataset.idx - nowImgIdx), 
                    initialPosition: -600, 
                    moveDirection: "left", 
                    lastListPosition: "", 
                    transitionDelay: 300,
                    currentIdx: parseInt(target.dataset.idx)
                });
                return;
            }
            this.beforeRotateComponent({
                target: carouselImages,
                moveDegree: -600 * Math.abs(target.dataset.idx - nowImgIdx),
                initialPosition: -600,
                moveDirection: "left",
                lastListPosition: "",
                transitionDelay: 300,
                currentIdx: parseInt(target.dataset.idx)
            });
        })
    }
}
