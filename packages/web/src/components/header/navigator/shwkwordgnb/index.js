import "./index.scss";

export default function shwkwordgnb(list_kwordgnb) {
  return `
  <h2 class="screen_out">쇼핑하우 스페셜 메뉴</h2>
  <ul class="list_kwordgnb">
  ${list_kwordgnb
    ?.map(
      ({ name, noti }) =>
        `<li><a href="#">${
          noti ? '<span class="txt_new"></span>' + name : name
        }</a></li>`
    )
    .join("")}
</ul>
`;
}
