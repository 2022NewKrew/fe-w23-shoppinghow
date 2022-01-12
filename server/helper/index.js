const fs = require('fs');
const path = require('path');

/**
 * @param { "HotDealProducts" | "SliderImages" | "ThemeProducts" | "topPopularList" } filename
 */
const readJsonData = (filename) => {
  const jsonFile = fs.readFileSync(path.resolve(__dirname, `../data/${filename}.json`), 'utf8');
  const jsonData = JSON.parse(jsonFile);
  return jsonData;
};

module.exports = { readJsonData };
