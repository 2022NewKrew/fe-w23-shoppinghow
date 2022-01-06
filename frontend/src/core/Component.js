export default class Component {
  $target;// 컴포넌트 타겟이 되는 element
  $props;// 컴포넌트에 넘어온 값들
  $state;// 상태

  // 컴포넌트 생성시에 타겟과 부모로 부터 받은 상태값
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.render();
    this.setEvent();
  }

  // sate설정하는 함수
  setup() {};

  // 렌더링 후 후 추가기능
  mounted() {};

  // 비동기 렌더링 후 후 추가기능
  async asyncMounted() {};

  // 화면에 보여줄 템플릿(레더링에 적용될 html)
  template() {
    return '';
  }

  // 화면 렌더링
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
    this.asyncMounted();
  }

  // 이벤트 설정
  // TODO: mount안된 상태에서 접근이 불가능해서 고민
  setEvent() {}

  // 상태 설정(상태 설정 후에 렌더링)
  setState(newState) {
    this.$state = {...this.$state, ...newState};
    this.render();
  }

  // 이벤트 설정 메소드
  // TODO: 아직 이해 못한 부분 존재, 추후 테스트해보면서 수정 및 적용할 예정
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    // selector에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
    // closest를 이용하여 처리한다.
    const isTarget = (target) => children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) {
        return false;
      }
      callback(event);
    });
  }
}
