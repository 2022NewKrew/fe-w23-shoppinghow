import Component from '../../../../core/Component';
import './index.scss';

export default class Theme extends Component {
  setup() {
    this.$state = {
      items: [
        {
          src: '//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FP15687305480.jpg%3Fut%3D20211210172757&amp;scode=talkgift',
          title: '트렌디한 구찌 지갑',
          desc: '꺼내서 자랑하고 싶은 이유',
        },
        {
          src: '//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop2.daumcdn.net%2Fshophow%2Fp%2FV14651717067.jpg%3Fut%3D20210904092746&amp;scode=talkgift',
          title: '트라이앵글 브랜드전',
          desc: '있으면 도움되는 조리 도구 총모음',
        },
        {
          src: '///shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FU15563830470.jpg%3Fut%3D20211222065245&amp;scode=talkgift',
          title: '자주 쓰는 종이호일 기획전',
          desc: '다양한 크기와 모양을 한 곳에!',
        },
        {
          src: '//shop1.daumcdn.net/thumb/S318x318/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FX15420477717.jpg%3Fut%3D20211116163053&amp;scode=talkgift',
          title: '작지만 강한 미니 온풍기',
          desc: '언제 어디서든 따뜻하게',
        },
      ],
    };
  }
  template() {
    const { items } = this.$state;
    return `
      <ul class="theme-container">
        ${items
          .map(
            (item) => `
          <li class="theme-item">
            <a href="#" class="theme__link">
              <span class="theme-item__info">
                <img src="${item.src}" class="img_top" alt="${item.title}">
              </span>
              <strong class="theme-item__title">${item.title}</strong>
              <span class="theme-item__desc">${item.desc}</span>
              <span class="theme-item__icon"></span>
            </a>
          </li>`
          )
          .join('')}
      </ul>
    `;
  }
}
