import axios from "axios";

const viewItemUrl="/api/view";
const dibsItemUrl="/api/dibs";
const itemDataUrl="/json/items.json";

/**
 * Singleton item data manager.
 */
class ItemDataManager{
  constructor(){
    /** @type {Array.<Object>} */
    this.itemData=undefined;
    /** @type {Object.<number, boolean>} */
    this.viewItemIds;
    /** @type {Object.<number, boolean>} */
    this.dibsItemIds;
    /** @type {boolean} */
    this.didUpdateViewItems=true;
    /** @type {boolean} */
    this.didUpdateDibsItems=true;
  }

  async fetchItemData(){
    if(this.itemData===undefined){
      this.itemData=await this.#getFromUrl(itemDataUrl);
    }
    return this.itemData;
  }

  async fetchViewItemIds(){
    if(this.didUpdateViewItems){
      this.didUpdateViewItems=false;
      this.viewItemIds=(await this.#getFromUrl(viewItemUrl));
    }
    return this.viewItemIds;
  }

  async fetchDibsItemIds(){
    if(this.didUpdateDibsItems){
      this.didUpdateDibsItems=false;
      this.dibsItemIds=(await this.#getFromUrl(dibsItemUrl));
    }
    return this.dibsItemIds;
  }

  /**
   * @param {number} itemId
   */
  updateViewItem(itemId){
    this.didUpdateViewItems=true;
    this.#updateToUrl(itemId, viewItemUrl);
  }

  /**
   * @param {number} itemId
   */
  updateDibsItem(itemId){
    this.didUpdateDibsItems=true;
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
   * @returns {Promise.<any>}
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
const instance=new ItemDataManager();
/**
 * But is this the right singleton pattern...?
 */
export default instance;
