export const renderMoney = (money) => {
  return (money + '').replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};
