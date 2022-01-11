const RCNTKEYWORDS = "rcntkeywords";

export function getRcntKeywords() {
  const wordlist = localStorage.getItem(RCNTKEYWORDS);
  return wordlist === null ? [] : JSON.parse(wordlist);
}

export function setRcntKeywords(wordlist) {
  const toJson = JSON.stringify(wordlist.slice(0, 5));

  localStorage.setItem(RCNTKEYWORDS, toJson);
}
export function addRcntKeywords(word) {
  const wordlist = getRcntKeywords();
  wordlist.unshift(word);
  setRcntKeywords(wordlist);
}
export function deleteRcntKeywords(word) {
  const wordlist = getRcntKeywords();
  const newwordlist = wordlist.filter((ele) => ele == word);
  setRcntKeywords(newwordlist);
}

const rcntSample = [
  "만년필",
  "대리석식탁",
  "석류즙",
  "캡슐커피",
  "황사마스크kf94",
];
rcntSample.forEach((word) => addRcntKeywords(word));
