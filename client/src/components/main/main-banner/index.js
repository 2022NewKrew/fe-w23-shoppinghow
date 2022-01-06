import ItemFrame from '../../common/item-frame';
import './index.scss';

export default class MainBanner {
  constructor({ $parent }) {
    const mainBanner = document.createElement('div');
    mainBanner.className = 'main-banner';

    this.itemFrame = new ItemFrame({ $parent: mainBanner, itemType: 'mainBanner' });
    $parent.appendChild(mainBanner);
  }

  setState(props) {
    this.itemFrame.setState([...props.bannerItemList, ...props.promotionList]);
  }
}
