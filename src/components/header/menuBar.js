export const menuBar = () => {
    const target = document.createElement('div');

    const addMouseEvent = (button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
        });

        const popUpLayer = button.querySelector('.pop-up-layer');
        button.addEventListener('mouseover', () => (popUpLayer.style.display = 'block'));
        button.addEventListener('mouseout', () => {
            setTimeout(() => (popUpLayer.style.display = 'none'), 1000);
        });
    };

    const render = () => {
        target.className = 'header-menu';
        target.innerHTML = `
            <div class="category">
                <button class="category__title"><i class="fas fa-bars"></i>카테고리</button>
                <div class="pop-up-layer category__container">
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
        `;

        const categoryBtn = target.querySelector('.category');
        const currentBtn = target.querySelector('.private-menu__current-button');
        addMouseEvent(categoryBtn);
        addMouseEvent(currentBtn);
        return target;
    };

    return render();
};
