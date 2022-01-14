import Component from "@core/Component";

class SuggestionRecentItem extends Component {
  template() {
    const { title, img } = this.props;
    return title
      ? `
        <li class="suggestion__recent-item">
            <a href="#" class="suggestion__recent-item-link">
                <img class="suggestion__recent-item-img" src="${img}"/>
            </a>
            <div class="suggestion__recent-item-description">
              <strong class="suggestion__recent-item-title">${title}</strong>
              <a href="#" class="suggestion__recent-item-view-more">상품보기</a>
            </div>
            <span class="ico_tail"></span>
        </li>
    `
      : `
        <li>
            <span class="suggestion__no-item-span">최근 본 상품이 없습니다.</span>
        </li>
    `;
  }
}

export default SuggestionRecentItem;
