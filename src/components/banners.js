import Component from "../core/Component";
import Carousel from "../components/Carousel";

export default class Banners extends Component {
  template() {
    return `
    <div class="banner">
      <div class="best">
        <a href="#" class="best__link">
          <img
            src="//shop1.daumcdn.net/shophow/sib/0_211210142533_BedHMJMFxJiJcYPqWFiZwzldCrXJHrcC"
            width="485"
            height="340"
            class="img_g"
            alt="기획전 이벤트"
          />
        </a>
      </div>
    `;
  }
}

function createBanners() {
  const banner = document.createElement("div");
  const carousel = new Carousel();

  banner.insertAdjacentHTML(
    "afterbegin",
    `<div class="banner">
      <div class="best">
        <a href="#" class="best__link">
          <img
            src="//shop1.daumcdn.net/shophow/sib/0_211210142533_BedHMJMFxJiJcYPqWFiZwzldCrXJHrcC"
            width="485"
            height="340"
            class="img_g"
            alt="기획전 이벤트"
          />
        </a>
      </div>
      ${carousel.render()}
      
    </div>
      
  `
  );

  const promotion = document.getElementById("promotion");
  promotion.appendChild(banner);
}
