import { View } from "@core";

export class RecentlyViewedProductsView extends View {

    createRecentlyViewedProducts() {
        return `
            <div class="rvpv_products_wrap">
                <strong class="rvpv_products_title">최근 본 상품<span class="num_products"></span></strong>
                <div class="box_panel">
                    <span class="txt_noproducts"><span class="txt_red">최근 본 상품</span>이 없습니다.</span>
                </div>
            </div>
        `;
    }
}
