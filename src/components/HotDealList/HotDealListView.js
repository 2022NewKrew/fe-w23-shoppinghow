import { View } from "@core";

export class HotDealListView extends View {
    createHotDealList(lists) {
        return lists
            .map(({ imageURL, title, beforePrice, discountedPrice, discountPercentage }) => `
                <li class="hot-deal__item">
                    <a href="" class="hot-deal__link">
                        <span class="hot-deal__thumb">
                            <img src="${imageURL}" class="hot-deal__img" alt="" width="200" height="200">
                        </span>
                        <strong class="hot-deal__title">${title}</strong>
                        <span class="hot-deal__detail-price">
                            <span class="txt-price">${discountedPrice.toLocaleString()}</span>
                            <span class="txt-price-percent">${discountPercentage === "핫딜가" 
                                ? discountPercentage 
                                : `${discountPercentage}%
                            `}</span>
                        </span>
                        ${discountPercentage !== "핫딜가" ? `<del>${beforePrice.toLocaleString()}</del>` : ""}
                    </a>
                </li>
            `)
            .join("");
    }
}
