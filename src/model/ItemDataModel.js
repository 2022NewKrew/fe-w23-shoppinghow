import {getRequestToUrl} from "../utils";
import Observable from "./Observable";

class ItemDataModel extends Observable{
  constructor(){
    super();
    this.url="/json/items.json";
  }

  async fetchData(){
    try{
      this.data=await getRequestToUrl(this.url);
    }catch(e){
      console.error(e);
      return;
    }
    super.notify();
  }

  /**
   * Return data without subscribing.
   * @returns {Promise.<Array.<Object>>}
   */
  async getData(){
    if(this.data===undefined){
      await this.fetchData();
    }
    return this.data;
  }
}

const itemDataModel=new ItemDataModel();

export default itemDataModel;
