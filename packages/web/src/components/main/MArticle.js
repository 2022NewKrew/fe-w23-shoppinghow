import { $, createHTML } from "../../utils/dom";
import EvtSlide from "./EvtSlide";

const sample = {
  evtItemUrl: "assets/images/기획전 이벤트.png",
  listItem: [
    {
      thumb: "assets/images/마음을 전해요 _새해 카드.jpg",
      title: "마음을 전해요 #새해 카드",
      info: "손글씨로 전하는 새해 인사",
    },
  ],
  evtSlide: [
    "assets/images/이벤트1.png",
    "assets/images/이벤트2.png",
    "assets/images/이벤트3.png",
  ],
};

export default class MArticle {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = createHTML("div", { className: "mArticle" });

    $app.appendChild(this.$target);

    this.render();
  }

  createListItme(listItem) {
    return listItem
      .map(
        ({ thumb, title, info }) => `
        <li>
            <a href="#" class="link_prod">
                <span class="info_thumb">
                    <img src="${thumb}" />
                </span>
                <strong class="tit_g">${title}</strong>
                <span class="txt_info">${info}</span>
                <span class="ico_comm2 ico_theme"></span>
            </a>
        </li>
        `
      )
      .join("");
  }

  createEvtItem(evtItemUrl) {
    return `
        <div class="evt_item">
            <a href="#"><img src="${evtItemUrl}" /></a>
        </div>
    `;
  }

  createEvtSlide(evtSlide) {
    const El = new EvtSlide({
      $app: document.querySelector(".cont_event"),
      initialState: evtSlide,
    });
    El.render();
    El.carouselEvent(document.querySelector(".cont_event"), 3, 514);
  }

  render() {
    const { evtItemUrl, listItem, evtSlide } = sample;

    this.$target.innerHTML = `
        <h2 class="screen_out">쇼핑하우 홈</h2>
        <section class="section_top">
            <h2 class="screen_out">기획전 및 이벤트</h2>
            <div class="cont_event">
                ${this.createEvtItem(evtItemUrl)}
            </div>
            <ul class="list_item">
            ${this.createListItme(listItem)}
            </ul>
        </section>
    `;
    this.createEvtSlide(evtSlide);
  }
}
