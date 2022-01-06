import "./style/app.scss";
import ApiService from "./apiService.js";
import SearchForm from "./searchForm";

const apiService = new ApiService();

window.addEventListener("DOMContentLoaded", () => {
  defaultSetting();
});

//기본 화면 구성 셋팅
function defaultSetting() {
  //검색키워드셋팅
  setSearchKeyword();
}

//TODO: getapi, getform 연동해서 검색키워드 리스트 가져와 화면에 뿌려줄 예정
//검색키워드셋팅
async function setSearchKeyword() {
  const searchKeywordGroup = await getSearhKeyword();
  setSearchForm(searchKeywordGroup)
}

async function getSearhKeyword() {
  const res = await apiService.getApi("getSearchKeywordGroup");
  if (res == null) {
    console.log("getSearhKeyword err");
    return;
  }

  console.log(res);
  return res.data
}

function setSearchForm(searchKeywordGroup){
  const el = document.getElementsByClassName("list_rollkeywords")[0];
  const searchForm = new SearchForm();
  console.log(el);
  el.innerHTML = searchForm.init(searchKeywordGroup);
}