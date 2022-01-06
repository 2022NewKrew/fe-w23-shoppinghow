import Component from "../core/Component.js";
import RecentProduct from "../components/RecentProduct";

export default class Navbar extends Component {
  mounted() {
    const $recentProductMenu = this.$target.querySelector(".private-menu");
    new RecentProduct($recentProductMenu);
  }

  template() {
    return `
    <div class="header-menu">
        <div class="category">
            <button class="category__title">
                <i class="fas fa-bars"></i>카테고리
            </button>
            <ul class="category-first">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul class="category-second">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul class="category-third">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="gubun-bar"></div>
        <ul class="top-menu">
            <li class="top-menu__btn">
                <a href="#">핫딜</a>
            </li>
            <li class="top-menu__btn">
                <a href="">베스트100</a>
            </li>
            <li class="top-menu__btn">
                <a href="">할인특가</a>
            </li>
            <li class="top-menu__btn">
                <a href="">기획전</a>
            </li>
        </ul>
        <ul class="private-menu">
            <li class="private-menu__btn">
                <a href="#">로그인</a>
            </li>
            <li class="private-menu__btn" id="recent-product-menu">
                <a href="#">최근 본 상품</a>
            </li>
        </ul>
        
    </div>
        `;
  }
}

// export default function createNavbar() {
//   const navbar = document.createElement("div");
//   const recentProduct = new RecentProduct();
//   navbar.insertAdjacentHTML(
//     "afterbegin",
//     /*html*/ `
//     <div class="header-menu">
//         <div class="category">
//             <button class="category__title">
//                 <i class="fas fa-bars"></i>카테고리
//             </button>
//             <ul class="category-first">
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>
//             <ul class="category-second">
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>
//             <ul class="category-third">
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>
//         </div>
//         <div class="gubun-bar"></div>
//         <ul class="top-menu">
//             <li class="top-menu__btn">
//                 <a href="#">핫딜</a>
//             </li>
//             <li class="top-menu__btn">
//                 <a href="">베스트100</a>
//             </li>
//             <li class="top-menu__btn">
//                 <a href="">할인특가</a>
//             </li>
//             <li class="top-menu__btn">
//                 <a href="">기획전</a>
//             </li>
//         </ul>
//         <ul class="private-menu">
//             <li class="private-menu__btn">
//                 <a href="#">로그인</a>
//             </li>
//             <li class="private-menu__btn" id="recent-product-menu">
//                 <a href="#">최근 본 상품</a>
//             </li>
//             ${recentProduct.render()}
//         </ul>

//     </div>
//     `
//   );

//   const header = document.getElementById("header");
//   header.appendChild(navbar);
// }
