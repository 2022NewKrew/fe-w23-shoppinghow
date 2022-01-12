import Top10 from "./Top10";
import top10Model from "../model/Top10model";

export default class SearchBar{
  /**
   * @param {HTMLElement} searchBarElement
   * @param {HTMLElement} inputElement
   */
  constructor(searchBarElement, inputElement){
    this.searchBarElement=searchBarElement;
    this.inputElement=inputElement;
    /** @type {string[]} */
    this.top10Keywords;
    /** @type {Top10} */
    this.top10;

    this.#init();
  }
  
  async #init(){
    this.top10Keywords=await top10Model.getData();
    const top10UlElement=this.searchBarElement.querySelector(".search-top10");
    this.top10=new Top10(top10UlElement, this.top10Keywords);
    this.top10.show();
    this.addTop10EventListeners();
  }
  
  addTop10EventListeners(){
    this.inputElement.addEventListener("focusin", ()=>{
      this.top10.hide();
    });
    this.inputElement.addEventListener("focusout", ()=>{
      this.top10.show();
    });
  }
}
