//todo 삭제 예정 작동여부 체크용
export default class MainService {
  constructor({ targetEl }) {
    this.targetEl = targetEl;
  }

  init(dataList) {
    console.log("test");
    // const lastValue = dataList.at(-1);
    // return this.render(lastValue);
  }

  render(data) {
    return `
        <div>
            <div>last value is ${data}</div>
            <div>random value is ${C.x}, ${C.y}</div>
        </div>
        `;
  }
}
