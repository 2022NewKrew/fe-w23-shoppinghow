import axios from "axios";

const viewItemUrl="/api/view";
const dibsItemUrl="/api/dibs";
const itemDataUrl="/json/items.json";

let instance=undefined;

/**
 * Singleton item data manager.
 */
class ItemDataManager{
  constructor(){
    if(instance!==undefined){
      return instance;
    }
    instance=this;
    /** @type {Array.<Object>} */
    this.itemData;
    /** @type {Object.<number, boolean>} */
    this.viewItemIdsCache;
    /** @type {Object.<number, boolean>} */
    this.dibsItemIdsCache;
    /** @type {boolean} */
    this.didUpdatedViewItems=false;
    /** @type {boolean} */
    this.didUpdatedDibsItems=false;
  }

  async fetchItemData(){
    return (await this.#getFromUrl(itemDataUrl));
  }
  
  async fetchViewItemIds(){
    if(this.didUpdatedViewItems){
      this.didUpdatedViewItems=false;
      this.viewItemIdsCache=(await this.#getFromUrl(viewItemUrl));
    }
    return this.viewItemIdsCache;
  }

  async fetchDibsItemIds(){
    if(this.didUpdatedDibsItems){
      this.didUpdatedDibsItems=false;
      this.viewItemIdsCache=(await this.#getFromUrl(dibsItemUrl));
    }
    return this.viewItemIdsCache;
  }

  /**
   * @param {number} itemId
   */
  updateViewItem(itemId){
    this.#updateToUrl(itemId, viewItemUrl);
  }

  /**
   * @param {number} itemId
   */
  updateDibsItem(itemId){
    this.#updateToUrl(itemId, dibsItemUrl);
  }

  /**
   * @param {number} itemId
   * @param {string} url
   */
  #updateToUrl(itemId, url){
    axios.post(url, {
      itemId: itemId
    }).catch((reason)=>{
      console.error(`Update failed: ${reason}`);
    });
  }

  /**
   * @param {string} url
   */
  #getFromUrl(url){
    return new Promise((resolve, reject)=>{
      axios.get(url)
        .then(({data})=>{
          resolve(data);
        })
        .catch((reason)=>{
          reject(reason);
        });
    });
  }
}
/**
 * But is this the right singleton pattern...?
 */
export default new ItemDataManager();
