import { categoryTemplate } from "./categoryTemplate.js";

const menuListTemplate = ({className, list}) => {
    return `
        <ul class="${className}">
            ${list.map(({href, text})=>`
                <li class="${className}__btn"><a href="${href}">${text}</a></li>
            `).join('')}
        </ul>
    `;
}

const privateMenuTemplate = () => {
    // dummy
    return `
        <ul class="private-menu">
            <li class="private-menu__btn"><a href="#">로그인</a></li>
            <li class="private-menu__btn recent-product">
                <a href="#">최근본상품</a>
                <div class="hover-tap">
                    <ul class="hover-tap-menu">
                        <li class="hover-tap-menu__btn"><a href="#">최근본상품</a></li>
                        <li class="hover-tap-menu__btn"><a href="#">내가 찜한 상품</a></li>
                    </ul>
                    <div class="hover-tap-item-container">상품 없음</div>
                </div>
            </li>
        </ul>
    `;
}

export const menuTemplate = ({topMenuList, keywordList}) => {

    const categoryTpl = categoryTemplate();
    const menuTpl = menuListTemplate({className: 'top-menu', list: topMenuList});
    const keywordTpl = menuListTemplate({className: 'keyword-menu', list: keywordList});
    const privateMenuTpl = privateMenuTemplate();

    return `
        <div class="header-menu">
            ${categoryTpl}
            <div class="gubun-bar"></div>
            ${menuTpl}
            <div class="gubun-bar"></div>
            ${keywordTpl}
            ${privateMenuTpl}
        </div>
    `;
}