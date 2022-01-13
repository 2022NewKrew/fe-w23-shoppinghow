import { View } from "@core";

export class ImgCarouselView extends View {
    createImgCarousel(imgs) {
        return imgs
            .map((img) => `
                <a href="#" target="_blank" class="planning__link">
                    <img src="${img}" width="485" height="340" class="img_g" alt="">
                </a>
            `)
            .join("");
    }
}
