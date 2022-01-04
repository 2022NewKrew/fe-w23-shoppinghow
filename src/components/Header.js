import SearchBar from "./SearchBar";

class Header {
  #searchbarEl = new SearchBar();

  render() {
    return `<div class="header-top">
            <div class="title">
                <h1>쇼핑하우</h1>
            </div>
            ${this.#searchbarEl.render()}
    </div>
    <div class="header-menu">
            <div class="category">
                <button class="category__title"><i class="fas fa-bars"></i>카테고리</button>
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
                <li class="top-menu__btn"><a href="#">핫딜</a></li>
                <li class="top-menu__btn"><a href="">베스트100</a></li>
                <li class="top-menu__btn"><a href="">할인특가</a></li>
                <li class="top-menu__btn"><a href="">기획전</a></li>
            </ul>
            <ul class="private-menu">
                <li class="private-menu__btn"><a href="#">로그인</a></li>
                <li class="private-menu__btn"><a href="#">최근본상품</a></li>
            </ul>
        </div>`;
  }
}

export default Header;
