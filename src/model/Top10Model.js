import {getRequestToUrl} from "../utils";
import Observable from "./Observable";

class Top10Model extends Observable{
  constructor(){
    super();
    this.url="/json/top10.json";
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

const top10Model=new Top10Model();

export default top10Model;
