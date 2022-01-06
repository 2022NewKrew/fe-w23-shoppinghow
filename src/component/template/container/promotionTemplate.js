import { carouselTemplate } from "./carouselTemplate.js";

export const promotionTemplate = ({best, carouselList,themeList}) => {
    
    const carouselTpl = `
        <div class="planning">
            <a href="#" target="_blank" class="planning__link"><img
                    src="//shop2.daumcdn.net/shophow/sib/0_211202145115_cjUvJCvuztdGHrYUNDAIqoswLScKwQct"
                    width="485" height="340" class="img_g" alt=""></a>
            <button class="planning__left-btn"></button>
            <button class="planning__right-btn"></button>
            <div class="planning__paging">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;

    const planningTpl = carouselTemplate(carouselList);

    return `
        <div class="promotion">
            <div class="banner">
                <div class="best">
                    <a href="${best.href}" class="best__link">
                        <img src="${best.imgUrl}"
                            width="485" height="340" class="img_g" alt="기획전 이벤트">
                    </a>
                </div>
                ${planningTpl}
            </div>
            <!-- dummy -->
            <div class="theme">
                <ul class="theme-container">
                    <li class="theme-item">
                        <a href="#" class="theme__link">
                            <span class="theme-item__info">
                                <img src="//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FP15687305480.jpg%3Fut%3D20211210172757&amp;scode=talkgift" width="200" height="200" class="img_top" alt="트렌디한 구찌 지갑"></span><strong
                                class="theme-item__title">트렌디한 구찌 지갑</strong><span class="theme-item__desc">꺼내서 자랑하고 싶은 이유</span><span class="theme-item__icon">테마</span></a>
                    </li>
                    <li class="theme-item">
                        <a href="#" class="theme__link">
                            <span class="theme-item__info">
                                <img src="//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop2.daumcdn.net%2Fshophow%2Fp%2FV14651717067.jpg%3Fut%3D20210904092746&amp;scode=talkgift" width="200" height="200" class="img_top" alt="트라이앵글 브랜드전"></span><strong
                                class="theme-item__title">트라이앵글 브랜드전</strong><span class="theme-item__desc">있으면 도움되는 조리 도구 총모음</span><span class="theme-item__icon">테마</span></a>
                    </li>
                    <li class="theme-item">
                        <a href="#" class="theme__link">
                            <span class="theme-item__info">
                                <img src="//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FX15420477717.jpg%3Fut%3D20211116163053&amp;scode=talkgift" width="200" height="200" class="img_top" alt="작지만 강한 미니 온풍기"></span><strong
                                class="theme-item__title">작지만 강한 미니 온풍기</strong><span class="theme-item__desc">언제 어디서든 따뜻하게</span><span class="theme-item__icon">테마</span></a>
                    </li>
                    <li class="theme-item">
                        <a href="#" class="theme__link">
                            <span class="theme-item__info">
                                <img src="//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FU15563830470.jpg%3Fut%3D20211222065245&amp;scode=talkgift"
                                    width="200" height="200" class="img_top" alt="자주 쓰는 종이호일 기획전"></span><strong
                                class="theme-item__title">자주 쓰는 종이호일 기획전</strong><span class="theme-item__desc">다양한 크기와 모양을 한
                                곳에!</span><span class="theme-item__icon">테마</span></a>
                    </li>
                </ul>
            </div>
        </div>
    `;
}