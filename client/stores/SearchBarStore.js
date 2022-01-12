import { Store } from '@core';
import { getURLParams } from '@utils';

const getInitInputValue = () => {
  const { search } = getURLParams();
  return search ?? '';
};

/**
 * @actionKey `view`
 * @item { title: string, img: string, url: string }
 */
export const SearchInputStore = new Store({ inputValue: getInitInputValue() }, (state, { actionKey, inputValue }) => {
  switch (actionKey) {
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue };
    default:
      return { ...state };
  }
});

export const SearchFocusStore = new Store({ isSearchFocused: false }, (state, { actionKey, isSearchFocused }) => {
  switch (actionKey) {
    case 'FOCUS_INPUT':
      return { ...state, isSearchFocused };
    default:
      return { ...state };
  }
});
