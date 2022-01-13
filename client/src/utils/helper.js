import { removeItemInLocalStroage } from './local-storage';

export const $ = (selector, parentNode = document) => {
  return parentNode.querySelector(selector);
};

export const addMoneyUnitLogic = (money) => {
  const moneyStringType = money.toString().toLocaleString();
  return moneyStringType + '원';
};

export const adjustDiscount = (price, discountRate) => {
  const discountRateWithoutPerCent = discountRate.replace(/[^0-9]/g, '');
  const adjustDiscountPrice = Number(100 - discountRateWithoutPerCent) * 0.01 * price;
  const stringPrice = adjustDiscountPrice.toLocaleString();
  return stringPrice + '원';
};

export const removeDulication = (data, originState, key) => {
  const duplicationIndex = originState.findIndex((ele) => ele === data);
  if (duplicationIndex >= 0) removeItemInLocalStroage(key, duplicationIndex);
};
