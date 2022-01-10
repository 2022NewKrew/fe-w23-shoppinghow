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
}

const itemDataModel=new ItemDataModel();

export default itemDataModel;
