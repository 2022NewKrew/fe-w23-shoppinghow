export const headerInnerHTML = `
<div class="header-top">
    <div class="title">
        <h1>쇼핑하우</h1>
    </div>
    <div class="search">
        <form>
            <input type="text" class="search__input">
            <button class="search__icon">🔍</button>
        </form>
        <div class="search-top10__window">
        </div>
    </div>
</div>

<div class="header-menu">
    <div class="category">
        <button class="category__title"><i class="fas fa-bars"></i>카테고리</button>
        <div class="pop-up-layer category__container">
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
        <li class="private-menu__btn private-menu__current-button"><a href="#">최근본상품</a>
        <div class="pop-up-layer current-goods"></div>
        </li>
    </ul>
    
</div>
`;
