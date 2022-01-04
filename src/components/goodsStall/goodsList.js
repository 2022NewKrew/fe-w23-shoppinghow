import { goodsItem } from './goodsItem';

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

export const goodsList = () => {
    const target = document.createElement('ul');

    const render = () => {
        target.className = 'hot-deal-list';
        goodsData.forEach((goods) => target.appendChild(goodsItem(goods)));

        return target;
    };

    return render();
};
