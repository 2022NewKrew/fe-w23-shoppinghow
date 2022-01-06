import { promotion } from '../promotion/promotion.js';
import { goodsStall } from '../goodsStall/goodsStall.js';
import { suggestion } from '../suggestion.js';

const goodsData = [
    {
        title: '구매1만↑우유앙빵10+10',
        imgSrc: '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895',
        price: '18500',
        priceEvent: '핫딜가',
    },
    {
        title: '구매1만↑우유앙빵10+10',
        imgSrc: '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895',
        price: '18500',
        priceEvent: '핫딜가',
    },
    {
        title: '구매1만↑우유앙빵10+10',
        imgSrc: '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895',
        price: '18500',
        priceEvent: '핫딜가',
    },
    {
        title: '구매1만↑우유앙빵10+10',
        imgSrc: '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895',
        price: '18500',
        priceEvent: '핫딜가',
    },
    {
        title: '구매1만↑우유앙빵10+10',
        imgSrc: '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895',
        price: '18500',
        priceEvent: '핫딜가',
    },
    {
        title: '구매1만↑우유앙빵10+10',
        imgSrc: '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895',
        price: '18500',
        priceEvent: '핫딜가',
    },
    {
        title: '구매1만↑우유앙빵10+10',
        imgSrc: '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895',
        price: '18500',
        priceEvent: '핫딜가',
    },
    {
        title: '구매1만↑우유앙빵10+10',
        imgSrc: '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895',
        price: '18500',
        priceEvent: '핫딜가',
    },
    {
        title: '구매1만↑우유앙빵10+10',
        imgSrc: '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895',
        price: '18500',
        priceEvent: '핫딜가',
    },
    {
        title: '구매1만↑우유앙빵10+10',
        imgSrc: '//shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211221145844446_191895',
        price: '18500',
        priceEvent: '핫딜가',
    },
];

export const topPage = () => {
    const target = document.createElement('div');

    const render = () => {
        target.className = 'container';
        target.appendChild(promotion());
        target.appendChild(goodsStall({ title: '품절주의! 역대급 핫딜', goodsData }));
        target.appendChild(goodsStall({ title: '쇼핑 급상승 키워드', goodsData }));
        target.appendChild(suggestion());
        return target;
    };

    return render();
};
