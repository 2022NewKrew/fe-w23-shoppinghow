export const REMOVE_PRE_DUPLICATED_ITEM_CONSTRAINTS = (itemEqualFunction) => (valueArray, newValue) => {
    const removeDuplicatedArray = valueArray.filter((ele) => !itemEqualFunction(ele, newValue));
    removeDuplicatedArray.push(newValue);
    return removeDuplicatedArray;
};
