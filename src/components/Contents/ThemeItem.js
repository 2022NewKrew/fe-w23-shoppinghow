import Component from "@core/Component";

class ThemeItem extends Component {
  template() {
    const { title, description, img } = this.props;
    return `
      <li class="theme-item item">
          <a href="#" class="theme__link">
              <span class="theme-item__info">
                  <img src="${img}" width="200" height="200" class="img_top item-img" alt="${title}">
              </span>
              <strong class="theme-item__title item-title"> ${title} </strong>
              <span class="theme-item__desc"> ${description} </span>
              <span class="theme-item__icon"> 테마 </span>
          </a>
      </li>
    `;
  }
}

export default ThemeItem;
