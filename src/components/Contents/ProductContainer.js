import Component from "@core/Component";
import ProductItem from "@components/Contents/ProductItem";

class ProductContainer extends Component {
  template() {
    return `
        <div class="product-group group-${this.props.idx}">
            <h2 class="section-title">${this.props.title}</h2>
            <ul class="product-list"></ul>
        </div>
    `;
  }

  mounted() {
    const { idx, products } = this.props;
    const $productListWrapper = this.$target.querySelector(`.group-${idx}`);
    const $productList = $productListWrapper.querySelector(".product-list");
    products.map((product) => {
      new ProductItem($productList, product);
    });
  }
}

export default ProductContainer;
