import "./index.scss";

export default function shoppingPartner(partnerList) {
  const createContPartner = ({ title, malls }) => {
    return `
        <div class="cate_partner">
            <strong class="tit_mall">${title}</strong>
            <ul class="list_mall">
                ${malls
                  .map(
                    (mall) => `
                    <li><a href="#">${mall}</a></li>
                `
                  )
                  .join("")}
            </ul>
        </div>
        `;
  };

  return `
    <div class="wrap_shopping_partner">
        <h3 class="tit_home">쇼핑하우 파트너</h3>
        <div class="section_etc">
            <div class="cont_partner">
                ${partnerList
                  .map((partner) => createContPartner(partner))
                  .join("")}
            </div>
            <button type="button" class="btn_home"></button>
        </div>
        <a href="#" class="link_all">전체보기</a>
    </div>
    `;
}
