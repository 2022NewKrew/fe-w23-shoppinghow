import { createHTML } from '../../utils/helper';
import data from './data';
import HeaderLogo from './components/headerTop/headerLogo';
import SearchBar from './components/headerTop/searchBar';
import NavBar from './components/headerBottom/navBar';
import './header.scss';

export default class Header {
  $parentNode;
  $target;
  $logo;
  logoImgSrc;

  constructor($app) {
    this.$parentNode = $app;
    this.logoImgSrc = data.logoImgSrc;
    this.topSearchWords = data.topSearchWords;
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

    headerContainer.appendChild(headerTopContainer);
    headerContainer.appendChild(headerBottomContainer);

    return headerContainer;
  }
}