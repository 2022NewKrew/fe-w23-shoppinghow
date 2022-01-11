import { setMVC, mount } from "@utils";
import { ImgCarouselModel, ImgCarouselView, ImgCarouselController } from "@components/ImgCarousel";

export default class Main {
    constructor(target) {
        this.target = target;
    }
    
    init() {
        mount(this.target, "#template_main")
        setMVC(ImgCarouselModel, ImgCarouselView, ImgCarouselController)
    }

    render() {
        this.init();
    }
}
