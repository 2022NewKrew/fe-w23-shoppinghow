import { createHTML } from '../../utils/helper';
import data from './data';
import HeaderLogo from './headerTop/headerLogo';
import SearchBar from './headerTop/searchBar';
import NavBar from './headerBottom/navBar';
import './header.scss';

export default class Header {
  $parentNode;
  $target;
  $logo;
  logoImgSrc;
  topSearchWords;
  navMenus;
  navHashTags;

  constructor($app) {
    this.$parentNode = $app;
    this.logoImgSrc = data.logoImgSrc;
    this.topSearchWords = data.topSearchWords;
    this.navMenus = data.navMenus;
    this.navHashTags = data.hashTags;
    this.$target = this.createTemplate();
    this.render();
  }

  render() {
    this.$parentNode.appendChild(this.$target);
  }

  createTemplate() {
    const headerTopContainer = createHTML('div', { className: 'header-top-container' });
    const headerBottomContainer = createHTML('div', { className: 'header-bottom-container' });
    const headerContainer = createHTML('header', { className: 'header-container' });

    new HeaderLogo(headerTopContainer, this.logoImgSrc);
    new SearchBar(headerTopContainer, this.topSearchWords);
    new NavBar(headerBottomContainer, this.navMenus, this.navHashTags);

    headerContainer.appendChild(headerTopContainer);
    headerContainer.appendChild(headerBottomContainer);

    return headerContainer;
  }
}