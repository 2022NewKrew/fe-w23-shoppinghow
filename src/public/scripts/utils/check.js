const checkButtonTag = target => {
  return target.tagName === "BUTTON";
};
const checkDivTag = target => {
  return target.tagName === "DIV";
};

export { checkButtonTag, checkDivTag };
