import Component from "../../../core/Component";

export default class KaKaoBanner extends Component {
  template() {
    return `
    <div data-component="kakao-event" class="cont_event">
        <div class="#banner_event evt_item _GL">
            <a href="" class="link_event _GC_">
            </a>
        </div>
    </div>
    <div data-component="kakao-event-list" id="mallEventList" class="#banner_mallevent cont_item cont_top _GL">
        <div class="##banner_mileage evt_slide _GL">

        </div>
    </div>
    `;
  }
}
