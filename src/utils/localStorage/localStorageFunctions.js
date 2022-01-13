const STORAGE_MAX_LENGTH = {
    recentProduct: 6,
    recentSearchKeyword: 5,
};

export const getItemArrayFromLocalStorage = (key) => {
    const wrappedValue = JSON.parse(localStorage.getItem(JSON.stringify(key)));

    if (!wrappedValue) return [];
    else return wrappedValue[key];
};

export const setItemArrayToLocalStorage = (key, newItemArray) => {
    const wrappedNewValue = {};

    wrappedNewValue[key] = newItemArray;
    const newValueArrayString = JSON.stringify(wrappedNewValue);
    localStorage.setItem(JSON.stringify(key), newValueArrayString);
};

export const addItemToLocalStorage = (key, newValue, addItemRule) => {
    const valueArray = getItemArrayFromLocalStorage(key);

    let newValueArray = addItemRule ? addItemRule(valueArray, newValue) : [...valueArray, newValue];
    if (STORAGE_MAX_LENGTH[key] && newValueArray.length > STORAGE_MAX_LENGTH[key])
        newValueArray = newValueArray.slice(1);
    setItemArrayToLocalStorage(key, newValueArray);
};
