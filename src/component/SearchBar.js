import globals from "../globals";
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
      this.searchInfo.show();
      if(this.inputElement.value===""){
        // Show info.
        this.searchInfo.showInfo();
      }
      else{
        // Show autocomplete.
        this.searchInfo.showAutocomplete();
      }
    });

    this.inputElement.addEventListener("focusout", ()=>{
      this.searchBarElement.removeAttribute("style");
      if(this.inputElement.value===""){
        this.top10.show();
      }
      this.searchInfo.hide();
    });

    this.inputElement.addEventListener("keypress", (e)=>{
      const currentKeyword=e.target.value;
      if(currentKeyword===""){
        return;
      }
      if(e.key==="Enter"){
        // this.#saveRecentKeywords(currentKeyword);
        recentKeywordsModel.addKeyword(currentKeyword);
      }
      this.searchInfo.showAutocomplete();
    });
  }

  /**
   * @param {string[]} newKeyword
   * @param {number?} limit
   */
  // #saveRecentKeywords(newKeyword, limit=5){
  //   let savedKeywords=localStorage[globals.recentKeywordsLSKey];
  //   let toBeSavedKeywords=undefined;
  //   if(savedKeywords===undefined){
  //     // Nothing has been saved. Thus the new keyword is the only one.
  //     toBeSavedKeywords=newKeyword;
  //   }
  //   else{
  //     let separatedKeywords=savedKeywords.split(globals.recentKeywordsSep);
  //     if(separatedKeywords.includes(newKeyword)){
  //       // Do not save keyword if it had been already saved.
  //       return;
  //     }
  //     if(separatedKeywords.length>=limit){
  //       separatedKeywords.length=limit-1;
  //     }
  //     savedKeywords=separatedKeywords.join(globals.recentKeywordsSep);
  //     toBeSavedKeywords=newKeyword+globals.recentKeywordsSep+savedKeywords;
  //   }
  //   localStorage[globals.recentKeywordsLSKey]=toBeSavedKeywords;
  // }

  /**
   * @param {number?} limit
   * @returns {string[]}
   */
  #getRecentKeywords(limit=5){
    let concatKeywords=localStorage.getItem(globals.recentKeywordsLSKey);
    if(concatKeywords===null){
      concatKeywords="";
    }
    const recentKeywords=concatKeywords.split(globals.recentKeywordsSep, concatKeywords, limit);
    return recentKeywords;
  }
}
