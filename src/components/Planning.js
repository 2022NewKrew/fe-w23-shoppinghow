import Component from "@core/Component";

class Planning extends Component {
  template() {
    return `
        <div class="planning">
            <a href="#" target="_blank" class="planning__link"><img
                    src="//shop2.daumcdn.net/shophow/sib/0_211202145115_cjUvJCvuztdGHrYUNDAIqoswLScKwQct"
                    width="485" height="340" class="img_g" alt=""></a>
            <button class="planning__left-btn">"<"</button>
            <button class="planning__right-btn">">"</button>
            <div class="planning__paging">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
  }
}

export default Planning;
