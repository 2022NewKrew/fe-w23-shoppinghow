import Component from "@core/Component";
import ProductItem from "@components/Contents/ProductItem";

class ProductContainer extends Component {
  template() {
    const { idx, title } = this.props;
    return `
        <div class="product-group" data-idx=${idx}>
            <h2 class="section-title">${title}</h2>
            <ul class="product-list"></ul>
        </div>
    `;
  }

  mounted() {
    const { idx, products } = this.props;
    const $productListWrapper = this.$target.querySelector(
      `.product-group[data-idx='${idx}']`
    );
    const $productList = $productListWrapper.querySelector(".product-list");
    products.map((product, idx) => {
      new ProductItem($productList, { ...product, idx });
    });
  }
}

export default ProductContainer;
