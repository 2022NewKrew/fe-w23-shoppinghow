import { $, createHTML } from "../../utils/dom";

const sample = {
  list_shwgnb: [
    { name: "핫딜" },
    { name: "베스트100" },
    { name: "할인특가", noti: true },
    { name: "기획전" },
  ],
  list_kwordgnb: [
    { name: "#건강식품" },
    { name: "#새해카드", noti: true },
    { name: "#보드게임" },
    { name: "#겨울 캠핑용품" },
  ],
};

export default class Navigator {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("nav", { id: "kakaoGnb", role: "navigation" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    const { list_shwgnb, list_kwordgnb } = sample;

    this.$target.innerHTML = `
    <div class="wrap_shwgnb">
      <h2 class="screen_out">쇼핑하우 주요 메뉴</h2>
      ${this.createShwcate()}
      <span class="txt_bar"></span>
  
      <h2 class="screen_out">쇼핑하우 메뉴</h2>
      ${this.createShwgnb(list_shwgnb)}
      <span class="txt_bar"></span>
  
      <h2 class="screen_out">쇼핑하우 스페셜 메뉴</h2>
      ${this.createShwkwordgnb(list_kwordgnb)}
  
      <h2 class="screen_out">쇼핑하우 사용자 메뉴</h2>
      ${this.createShwusergnb()}
    </div>
    `;
    this.addEvent();
  }

  createShwcate() {
    return `
      <div class="wrap_shwcate">
        <button type="button" class="btn_shwcate">
          <span class="ico_shwgnb ico_menu"></span>
          카테고리
        </button>
      </div>
      `;
  }
  createShwgnb(listShwgnb) {
    return `
      <ul class="list_shwgnb">
        ${listShwgnb
          .map(
            ({ name, noti }) =>
              `<li><a href="#">${
                noti ? '<span class="txt_new"></span>' + name : name
              }</a></li>`
          )
          .join("")}
        </ul>
    `;
  }
  createShwkwordgnb(listKwordgnb) {
    return `
    <ul class="list_kwordgnb">
      ${listKwordgnb
        .map(
          ({ name, noti }) =>
            `<li><a href="#">${
              noti ? '<span class="txt_new"></span>' + name : name
            }</a></li>`
        )
        .join("")}
    </ul>
    `;
  }
  createShwusergnb() {
    return `
    <ul class="list_usergnb">
        <li class="loginWrap">
          <a href="#">
            <span class="ico_shwgnb ico_user"></span>
            MY 쇼핑
          </a>
        </li>
        <li class="area_rcntproducts">
          <a href="#">
            <span class="ico_shwgnb ico_products"></span>
            최근본 상품
            <span class="ico_shwgnb ico_arrow"></span>
          </a>
          <div class="wrap_rcntproducts">
            <ul class="list_tab" role="tablist">
              <li role="presentation" class="on">
                <a href="#">
                  <sapn class="txt_tab">
                    최근 본 상품
                    <span class="num_products">1</span>
                  </sapn>
                </a>
              </li>
              <li role="presentation">
                <a href="#">
                  <span class="ico_shwgnb ico_heart"></span>
                  <sapn class="txt_tab">
                    내가 찜한 상품
                    <span class="num_products">0</span>
                  </sapn>
                </a>
              </li>
            </ul>
            <div class="box_pannel">
              <ul class="list_rcntproducts"></ul>
              <div class="info_login"></div>
            </div>
          </div>
        </li>
      </ul>
    `;
  }

  addEvent() {
    $(".area_rcntproducts").addEventListener("mouseover", (e) => {
      $(".wrap_rcntproducts").style.display = "block";
    });
    $(".area_rcntproducts").addEventListener("mouseout", (e) => {
      $(".wrap_rcntproducts").style.display = "none";
    });
  }
}
