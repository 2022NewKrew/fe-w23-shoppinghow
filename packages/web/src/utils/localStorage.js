const RCNTKEYWORDS = "rcntkeywords";
const RCNTPRODUCT = "rcntproduct";

const LStorage = {
  get: (key) => {
    const dataList = localStorage.getItem(key);
    return dataList ? JSON.parse(dataList) : [];
  },
  set: (key, dataList) => {
    localStorage.setItem(key, JSON.stringify(dataList));
  },
  add: (key, value, limit) => {
    let dataList = LStorage.get(key);

    if (!Array.isArray(dataList)) {
      dataList = [];
    }

    // 중복 확인
    const idx = dataList.indexOf(value);
    if (idx > -1) dataList.splice(idx, 1);

    dataList.unshift(value);
    LStorage.set(key, dataList.slice(0, limit));
  },
  delete: (key, value) => {
    const dataList = LStorage.get(key);
    const newDataList = dataList.filter((ele) => ele !== value);
    LStorage.set(key, newDataList);
  },
};

const rcntkwordSample = [
  "만년필",
  "대리석식탁",
  "석류즙",
  "캡슐커피",
  "황사마스크kf94",
];
const rcntproductSample = [
  "assets/images/hotdeal8.jpg",
  "assets/images/hotdeal9.jpg",
  "assets/images/hotdeal5.jpg",
];
LStorage.set(RCNTKEYWORDS, rcntkwordSample);
LStorage.set(RCNTPRODUCT, rcntproductSample);

export default LStorage;
