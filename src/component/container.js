import { addCarouselEvent } from './event/carouselEvent.js';
import { hotDealTemplate } from './template/container/hotDealTemplate.js';
import { promotionTemplate } from './template/container/promotionTemplate.js';
import { $ } from '../utils/utils.js';

// example dummy
function makeHotDealHTML() {
    const target = document.querySelector(".hot-deal-list");
    const hotdealItemTpl = `
        <li class="hot-deal__item">
            <a href="" class="hot-deal__link">
                <span class="hot-deal__thumb">
                    <img src="//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895" class="hot-deal__img" alt="">
                </span>

                <strong class="hot-deal__title">구매1만↑우유앙빵10+10</strong>

                <span class="hot-deal__detail-price">
                    <span class="txt-price">18,500 </span>
                    <span class="txt-price-percent">핫딜가</span>
                </span>
            </a>
        </li>`

    target.innerHTML = Array(10).fill(0).reduce( (html, item) => html+hotdealItemTpl, ``);
}

export class Container {
    state = {
        best: undefined,
        carouselList: [],
        themeList: [],
    };

    constructor($container) {
        this.$element = $container;

        fetch('../data/content.json')
            .then(response => response.json())
            .then(data => this.setState({
                best: data.best,
                carouselList: data.carouselList,
            }));
        
        this.render();
    }

    setState(newState) {
        this.state = {...this.state, ...newState};
        this.render();
    }

    template() {
        const promotionTpl = promotionTemplate(this.state);
        const hotDealTpl = hotDealTemplate();
        return `
            ${promotionTpl}
            ${hotDealTpl}
        `;
    }

    setEvent() {
        addCarouselEvent({
            leftBtnEl: $('.carousel__left-btn', this.$element),
            rightBtnEl: $('.carousel__right-btn', this.$element),
            containerEl: $('.carousel-container', this.$element)
        })
    }

    render() {
        this.$element.innerHTML = this.template();
        this.setEvent();

        makeHotDealHTML();
    }
}