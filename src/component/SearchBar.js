import recentKeywordsModel from "../model/RecentKeywordsModel";
import SearchInfo from "./SearchInfo";
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
    /** @type {SearchInfo} */
    this.searchInfo;
    this.autocompleteTimeoutHandle;

    this.#init();
  }

  async #init(){
    this.top10Keywords=await top10Model.getData();
    top10Model.subscribe((top10Keywords)=>{
      this.top10Keywords=top10Keywords;
    });
    recentKeywordsModel.subscribe((recentKeywords)=>{
      this.recentKeywords=recentKeywords;
    });
    this.#createTop10();
    this.#createSearchInfo();
  }

  #createSearchInfo(){
    const searchInfoElement=this.searchBarElement.querySelector(".search-info");
    this.searchInfo=new SearchInfo(searchInfoElement, this.top10Keywords);
  }

  #createTop10(){
    const top10UlElement=this.searchBarElement.querySelector(".search-top10");
    this.top10=new Top10(top10UlElement, this.top10Keywords);
    this.top10.show();
    this.#addEventListeners();
  }
  
  #addEventListeners(){
    this.inputElement.addEventListener("focusin", ()=>{
      this.searchBarElement.style="overflow:visible;";
      this.top10.hide();
      this.#showSearchInfo(this.inputElement.value);
    });

    this.inputElement.addEventListener("focusout", ()=>{
      this.searchBarElement.removeAttribute("style");
      if(this.inputElement.value===""){
        this.top10.show();
      }
      this.searchInfo.hide();
    });

    /**
     * keydown -> keypress -> keyup
     * 'input' event does not detect 'Enter' key.
     * 'keydown' does not fetch the latest input value.
     * 'keypress' does not detect 'Backspace' key.
     * 'keyup' does not fire until user releases key.
     * Which event should I use...? Or should I combine them?
     */
    this.inputElement.addEventListener("keyup", (e)=>{
      const currentKeyword=e.target.value;
      if(currentKeyword!=="" && e.key==="Enter"){
        recentKeywordsModel.addKeyword(currentKeyword);
      }
      this.#showSearchInfo(currentKeyword);
    });
  }

  /**
   * @param {string} currentKeyword
   */
  #showSearchInfo(currentKeyword){
    this.searchInfo.show();
    if(currentKeyword===""){
      // Show info.
      clearTimeout(this.autocompleteTimeoutHandle);
      this.searchInfo.showInfo();
    }
    else{
      // Show autocomplete.
      clearTimeout(this.autocompleteTimeoutHandle);
      this.autocompleteTimeoutHandle=setTimeout(()=>{
        this.searchInfo.showsAutocomplete(currentKeyword);
      }, 500);
    }
  }
}
