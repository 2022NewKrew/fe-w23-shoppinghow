import { setMVC, mount } from "@utils";
import { ImgCarouselModel, ImgCarouselView, ImgCarouselController } from "@components/ImgCarousel";
import { HotDealListModel, HotDealListView, HotDealListController } from "@components/HotDealList";

export default class Main {
    constructor(target) {
        this.target = target;
    }
    
    init() {
        mount(this.target, "#template_main");
        setMVC(ImgCarouselModel, ImgCarouselView, ImgCarouselController);
        setMVC(HotDealListModel, HotDealListView, HotDealListController);
    }

    render() {
        this.init();
    }
}
