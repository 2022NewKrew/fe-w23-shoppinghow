import { getRequestToUrl, postRequestToUrl } from "../utils";
import Observable from "./Observable";

class ViewItemIdsModel extends Observable{
  constructor(){
    super();
    this.url="/api/view";
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
}

const viewItemIdsModel=new ViewItemIdsModel();
export default viewItemIdsModel;
