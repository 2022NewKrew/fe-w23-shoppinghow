import { createDom } from '@utils/createDom';
import { promotion } from '@components/promotion';
import { goodsStall } from '@components/goodsStall';
import { suggestion } from '@components/suggestion';
import { getRisingKeywordProducts, getHotDealProducts } from '@api';

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

const fetchData = async (setState) => {
    const stateFetchFunction = {
        risingKeywordProducts: getRisingKeywordProducts,
        hotDealProducts: getHotDealProducts,
    };

    const stateKeys = Object.keys(stateFetchFunction);
    const promises = stateKeys.map((state) => stateFetchFunction[state]());
    Promise.all(promises).then((results) => {
        const newState = {};
        stateKeys.forEach((state, i) => (newState[state] = results[i]));
        setState(newState);
    });
};

export const topPage = () => {
    let state = { risingKeywordProducts: [], hotDealProducts: [] };

    const setState = (newState) => {
        state = { ...state, ...newState };
        render();
    };

    fetchData(setState);
    const target = createDom('div', { className: 'container' });

    const render = () => {
        target.innerText = '';
        target.appendChild(promotion());
        target.appendChild(
            goodsStall({ title: '품절주의! 역대급 핫딜', type: 'hotDeal', goodsData: state.hotDealProducts })
        );
        target.appendChild(
            goodsStall({ title: '쇼핑 급상승 키워드', type: 'rising', goodsData: state.risingKeywordProducts })
        );
        target.appendChild(suggestion());
        return target;
    };

    return render();
};
