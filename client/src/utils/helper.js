// extract element func
export const $ = (selector, parentNode = document) => {
  return parentNode.querySelector(selector);
};

export const addMoneyUnitLogic = (money) => {
  const moneyStringType = money.toString().toLocaleString();
  return moneyStringType + '원';
};
