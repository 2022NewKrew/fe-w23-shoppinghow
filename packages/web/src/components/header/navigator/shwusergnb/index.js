import "./index.scss";

export default function shwusergnb() {
  return `
    <h2 class="screen_out">쇼핑하우 사용자 메뉴</h2>
    <ul class="list_usergnb">
    <li class="loginWrap">
      <a href="javascript:;">
        <span class="ico_shwgnb ico_user"></span>
        MY 쇼핑
      </a>
    </li>
    <li class="area_rcntproducts">
      <a href="javascript:;">
        <span class="ico_shwgnb ico_products"></span>
        최근본 상품
        <span class="ico_shwgnb ico_arrow"></span>
      </a>
    </li>
  </ul>
      `;
}
