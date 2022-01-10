import Component from "@core/Component";
import Promotion from "@components/Contents/Promotion";
import ProductContainer from "@components/Contents/ProductContainer";
import ProductItem from "@components/Contents/ProductItem";

class Contents extends Component {
  template() {
    return `
        <div class="container"></div>
    `;
  }

  mounted() {
    const $container = this.$target.querySelector(".container");
    new Promotion($container);
    fetch("http://localhost:3000/productGroups.json")
      .then((res) => res.json())
      .then((productGroupList) => {
        productGroupList.map(
          (productGroup, idx) =>
            new ProductContainer($container, { idx, ...productGroup })
        );
      });
  }
}

export default Contents;
