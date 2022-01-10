import Component from "@core/Component";

class ProductItem extends Component {
  template() {
    const { title, img, price, originalPrice, discountTag } = this.props;
    return `
        <li class="product__item">
            <a href="" class="product__link">
                <span class="product__thumb">
                    <img src="${img}" class="product__img" alt="">
                </span>

                <strong class="product__title">${title}</strong>

                <span class="product__detail-price">
                    <div class="product__price-wrapper">
                        <strong class="txt-price">${price}원</strong>
                        ${
                          !originalPrice
                            ? ""
                            : '<span class="txt-original-price">' +
                              originalPrice +
                              "</span>"
                        }
                    </div>
                    ${
                      !discountTag
                        ? ""
                        : '<span class="txt-discount-tag">' +
                          discountTag +
                          "</span>"
                    }
                </span>
            </a>
        </li>
    `;
  }
}

export default ProductItem;
