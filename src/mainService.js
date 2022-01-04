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

  getPipelineValue() {
    const title = 'code squad members';
    const toLowerCase = (str) => str.toLowerCase();
    const addHyphens = (str) => str.replace(/\s/g, '-');

    const slug = title |> toLowerCase |> addHyphens;
    return slug;
  }

  init(dataList) {
    const lastValue = dataList.at(-1);
    const pipeLineValue = this.getPipelineValue();
    return this.render(lastValue, pipeLineValue);
  }

  render(data, pipeLineValue) {
    return `
		<div>
			<div>last value is ${data}</div>
			<div>random value is ${C.x}, ${C.y}</div>
			<div>pipeLineValue is ${pipeLineValue}</div>
        </div>
		`;
  }
}
