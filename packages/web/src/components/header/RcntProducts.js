import { $, createHTML } from "../../utils/dom";

const RECENT = "recent";
const ZZIM = "zzim";

export default class RcntProducts {
  constructor({ $app, initialState }) {
    this.state = {
      mode: ZZIM,
      rcnt: ["assets/images/20211117155005065_486113.jpg"],
      zzim: [],
    };
    this.$target = createHTML("div", { className: "wrap_rcntproducts" });
    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    this.$target.innerHTML = `
        <ul class="list_tab" role="tablist">
          <li role="presentation" id="recent" class="on">
            <a href="#" >
              <sapn class="txt_tab">
                최근 본 상품
                <span class="num_products">1</span>
              </sapn>
            </a>
          </li>
          <li role="presentation" id="zzim">
            <a href="#" >
              <span class="ico_shwgnb ico_heart"></span>
              <sapn class="txt_tab">
                내가 찜한 상품
                <span class="num_products">0</span>
              </sapn>
            </a>
          </li>
        </ul>
        <div class="box_pannel">
          <ul class="list_rcntproducts">
          </ul>
          <div class="info_login">
            <a href="#" class="link_mypage">
              <span class="ico_shwgnb ico_user"></span>
              김성현_Ethan
            </a>
            <a href="#" class="btn_login">
              <span class="ico_shwgnb ico_power"></span>
              로그아웃
            </a>
          </div>
        </div>`;

    this.createBoxPannel();
    this.addEvent();
  }

  createBoxPannel() {
    const El = $(".list_rcntproducts");

    let content = "";
    if (this.state.mode == RECENT) {
      if (this.state.rcnt.length == 0) {
        content = `<span class="txt_noproducts"><span class="emph_g">최근 본 상품</span>이 없습니다. </span>`;
      } else {
      }
    } else {
      if (this.state.zzim.length == 0) {
        content = `<span class="txt_noproducts"><span class="emph_g">찜한 상품</span>이 없습니다. </span>`;
      } else {
      }
    }
    El.innerHTML = content;
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  addEvent() {
    $(".list_tab").addEventListener("mouseover", (e) => {
      const El = e.target.closest("li");
      if (!El.id) return;
      Array.from($(".list_tab").children).forEach((li) =>
        li.classList.remove("on")
      );
      El.classList.add("on");
      this.setState({
        ...this.state,
        mode: El.id == "recent" ? RECENT : ZZIM,
      });
    });
  }
}
