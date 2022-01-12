import "./index.scss";

export default function shwgnb(list_shwgnb) {
  return `
    <h2 class="screen_out">쇼핑하우 메뉴</h2>
    <ul class="list_shwgnb">
        ${list_shwgnb
          .map(
            ({ name, noti }) =>
              `<li><a href="#">${
                noti ? '<span class="txt_new"></span>' + name : name
              }</a></li>`
          )
          .join("")}
    </ul>
    <span class="txt_bar"></span>`;
}
