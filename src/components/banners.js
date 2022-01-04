export default function createBanners() {
  const banner = document.createElement("div");

  banner.innerHTML = `
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
    <div class="planning">
      <a href="#" target="_blank" class="planning__link"
        ><img
          src="//shop2.daumcdn.net/shophow/sib/0_211202145115_cjUvJCvuztdGHrYUNDAIqoswLScKwQct"
          width="485"
          height="340"
          class="img_g"
          alt=""
      /></a>
      <button class="planning__left-btn"></button>
      <button class="planning__right-btn"></button>
      <div class="planning__paging">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
      
  `;

  const promotion = document.getElementById("promotion");
  promotion.appendChild(banner);
}
