import Component from '@Core/Component.js';
import './index.scss';
import { addNewItem } from '@Utils/localStorage.js';

export default class HotDeal extends Component {
  setup() {
    this.$state = {
      items: [
        {
          id: 0,
          src: 'https://shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20211223142652408_222800',
          title: '롱키원새해맞이 1+1+1!',
          originalPrice: 237000,
          discountPercentage: 58,
        },
        {
          id: 1,
          src: 'https://shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220110144511111_960210',
          title: '안동찜닭1000g+증정까지?',
          originalPrice: 24300,
          discountPercentage: 55,
        },
        {
          id: 2,
          src: 'https://shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220110163039281_103427',
          title: '핏좋은 트레이닝 바지~!',
          originalPrice: 72000,
          discountPercentage: 61,
        },
        {
          id: 3,
          src: 'https://shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220110153951780_721297',
          title: '+집에서도 예쁜 잠옷set+',
          originalPrice: 8900,
          discountPercentage: 0,
        },
        {
          id: 4,
          src: 'https://shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220110142027330_431840',
          title: '미끄럼no!겨울신상 방한화',
          originalPrice: 10900,
          discountPercentage: 0,
        },
        {
          id: 5,
          src: 'https://shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220107134943171_823291',
          title: '톡딜 보온보냉텀블러 1+1',
          originalPrice: 19800,
          discountPercentage: 50,
        },
        {
          id: 6,
          src: 'https://shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220110164642037_223105',
          title: '뚝불 푸짐하게 가져가~',
          originalPrice: 24500,
          discountPercentage: 0,
        },
        {
          id: 7,
          src: 'https://shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220110162544394_888112',
          title: '디스커버리 기모맨투맨',
          originalPrice: 57030,
          discountPercentage: 0,
        },
        {
          id: 8,
          src: 'https://shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220106152822010_172883',
          title: '롱키원1+1+1!성장골든타임',
          originalPrice: 237000,
          discountPercentage: 58,
        },
        {
          id: 9,
          src: 'https://shop2.daumcdn.net/shophow/c/image/content/set/ad8255/20220110140354944_122493',
          title: '경추베개1+1 불면증안녕~',
          originalPrice: 10900,
          discountPercentage: 64,
        },
      ],
    };
  }
  template() {
    const numberWithCommas = (number) =>
      number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    const hotdealItems = this.$state.items
      .map((item) => {
        const salePrice = item.discountPercentage
          ? numberWithCommas(
              Math.floor(
                (item.originalPrice * (100 - item.discountPercentage)) /
                  100 /
                  100
              ) * 100
            )
          : numberWithCommas(item.originalPrice);
        return `
        <li class="hot-deal__item">
          <a class="hot-deal__link">
            <span class="hot-deal__thumb">
              <img src="${item.src}" alt="${item.title}">
            </span>
            <strong class="hot-deal__title">${item.title}</strong>
            <span class="hot-deal__detail-price">
              <span class="discount-info">
                <span class="txt-price">
                ${salePrice}원
                </span>
                <span class="txt-price-percent">
                  ${
                    item.discountPercentage
                      ? `${item.discountPercentage}%`
                      : `핫딜가`
                  }
                </span>
              </span>
              <span class="original-price">
                ${
                  item.discountPercentage
                    ? numberWithCommas(item.originalPrice)
                    : ''
                }
              </span>
            </span>
          </a>
        </li>
    `;
      })
      .join('');
    return `
      <h2 class="section-title">품절주의, 역대급 핫딜</h2>
      <ul class="hot-deal-list">
        ${hotdealItems}
      </ul>`;
  }

  setEvent() {
    const $themeItems = this.$target.getElementsByClassName('hot-deal__link');
    const { items } = this.$state;
    [...$themeItems].forEach((item, index) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`${items[index].title} 을 최근 본 상품에 추가합니다`);
        addNewItem('recent', items[index]);
      });
    });
  }
}
