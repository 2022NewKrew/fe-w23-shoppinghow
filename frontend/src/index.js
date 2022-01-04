import "./style/app.scss";
import MainService from "./mainService.js";
import GetForm from "./getForm.js";
import GetApi from "./getApi.js";

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
function setSearchKeyword(){

}