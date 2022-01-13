import { getRequestToUrl, postRequestToUrl } from "../utils";
import Observable from "./Observable";

class DibsItemIdsModel extends Observable{
  constructor(){
    super();
    this.url="/api/dibs";
  }
  
  async fetchData(){
    try{
      this.data=await getRequestToUrl(this.url);
    }catch(e){
      console.error(e);
      return;
    }
    this.notify();
  }

  /**
   * @param {number} itemId
   */
  async addId(itemId){
    await postRequestToUrl(itemId, this.url);
    this.fetchData();
  }

  /**
   * @param {number} itemId
   */
  isDibsedItem(itemId){
    return (itemId in this.data);
  }
}

const dibsItemIdsModel=new DibsItemIdsModel();
export default dibsItemIdsModel;
