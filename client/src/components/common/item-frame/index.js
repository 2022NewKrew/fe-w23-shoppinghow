import Item from '../item';
import './index.scss';

export default class ItemFrame {
  itemList = [];

  constructor({ $parent }) {
    this.itemFrame = document.createElement('ul');
    this.itemFrame.className = 'item-frame';
    $parent.appendChild(this.itemFrame);
  }

  setState(props) {
    this.itemList = props;
    this.render();
  }

  render() {
    this.itemFrame.innerHTML = '';
    this.itemList.forEach((item, index) => {
      new Item({ $parent: this.itemFrame, info: item, index });
    });
  }
}
