import {observable, observe} from './Observer.js';

export default class Component {
  $target;// 컴포넌트 타겟이 되는 element
  $props;// 컴포넌트에 넘어온 값들
  $state;// 상태
  $eventGroup; // 이벤트 리스트

  // 컴포넌트 생성시에 타겟과 부모로 부터 받은 상태값
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.$eventGroup = [];
    this.setup();
  }

  // 생성자 설정
  setup() {
    this.created();
    this.$state = observable(this.initState());
    observe(()=>{
      this.render();
      this.setEvent();
      this.mounted();
    });
  };

  // 초기 상태 설정
  initState() {
    return {};
  }

  // 최초실행 기능
  created() {};

  // 렌더링 후 추가기능
  mounted() {};

  // 화면에 보여줄 템플릿(레더링에 적용될 html)
  template() {
    return '';
  }

  // 화면 렌더링
  render() {
    this.removeEvent();
    this.$target.innerHTML = this.template();
  }

  // 이벤트 설정
  // TODO: mount안된 상태에서 접근이 불가능해서 고민
  setEvent() {}

  // 기존에 등록되어있는 이벤트 삭제
  removeEvent() {
    this.$eventGroup.forEach((eventInfo)=>{
      this.$target.removeEventListener(eventInfo.type, eventInfo.listener);
    });
    this.$eventGroup=[];
  }

  // 이벤트 설정 메소드
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    // selector에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
    // closest를 이용하여 처리한다.
    const isTarget = (target) => children.includes(target) || target.closest(selector);
    const listener = (event) => {
      if (!isTarget(event.target)) {
        return false;
      }
      callback(event);
    };
    this.$eventGroup.push({
      type: eventType,
      listener: listener,
    });
    this.$target.addEventListener(eventType, listener);
  }
}
