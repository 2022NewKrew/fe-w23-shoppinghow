class C {
  static x;
  static y;
  static {
    try {
      this.x = Math.floor(Math.random() * 10);
      this.y = Math.floor(Math.random() * 10);
    } catch {
      this.x = 1;
      this.y = 2;
    }
  }
}

export default class MainService {
  constructor({ targetEl }) {
    this.targetEl = targetEl;
		
  }

  init(dataList) {
    const lastValue = dataList.at(-1);
    return this.render(lastValue);
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