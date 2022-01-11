import Component from '../../../../core/Component';
import './index.scss';

export default class RecentItems extends Component {
  setup() {
    this.$state = {
      recently_viewed: [
        // {
        //   id: 0,
        //   src: '//shop4.daumcdn.net/thumb/C120x120.q90/?fname=http%3A%2F%2Fshop4.daumcdn.net%2Fshophow%2Fp%2FD5102534833.jpg%3Fut%3D20210415185733',
        //   title: '락앤락 헬로키티 칼도마 살균기'
        // },
      ],
      profile: {
        src: 'https://p.kakaocdn.net/th/talkp/wmKRLthouw/iTMJmufGTAfKTo3KUjxwJ1/o5xbs9_110x110_c.jpg',
        name: 'eve christmas',
      },
    };
  }

  template() {
    const { recently_viewed, profile } = this.$state;

    const recently_viewed_component = recently_viewed.length
      ? `
      <ul class="item-container">
        ${recently_viewed
          .map(
            (item) => `
        <li>
          <a>
            <img src="${item.src}" alt="${item.title}">
          </a>
        </li>
        `
          )
          .join('')}
      </ul>
    `
      : `
      <span class="no-product">
        <span class="emphasize">최근 본 상품</span>이 없습니다.
      </span>
    `;

    return `
      <ul class="tab_list">
        <li>
          <a class="tab_btn on">
            최근 본 상품
          </a>
        </li>
        <li class="my-selection">
          <a class="tab_btn">
            <span class="heart-icon"></span>
            내가 찜한 상품
          </a>
        </li>
      </ul>
      <div class="content_wrapper">
        ${recently_viewed_component}
        <div class="login-info">
          <a class="my-info">
            <span class="profile-image" >
              <img src="${profile.src}" alt="profile-image">
            </span>
            ${profile.name}
          </a>
          <a class="logout">
            <span class="power_icon"></span>
            로그아웃
          </a>
        </div>
      </div>
    `;
  }
}
