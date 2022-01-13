import axios from "axios";
import Observable from "./Observable";

class AutocompleteModel extends Observable{
  constructor(){
    super();
    this.data=[];
    this.url="/api/search";
  }

  /**
   * Search by keyword and retrieve related keywords.
   * @param {string} keyword
   * @param {number} limit
   * @returns {Promise.<string[]>}
   */
  async fetchData(keyword, limit=10){
    try{
      const res=await axios.get(this.url, {
        params: {
          keyword: keyword
        }
      });
      this.data=res.data.splice(0, limit);
      this.notify();
      return this.data;
    }catch(e){
      console.error("autocomplete fetch failed.", e);
    }
  }
}

const autocompleteModel=new AutocompleteModel();
export default autocompleteModel;
