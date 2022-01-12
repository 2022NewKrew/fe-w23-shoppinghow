import { Store } from '@core';
import { RelatedSearchService } from '@services';
import { getURLParams } from '@utils';

const getInitInputValue = () => {
  const { search } = getURLParams();
  return search ?? '';
};

/**
 * @actionKey `SET_INPUT_VALUE`
 * @state { inputValue: string, suggestList: string[] }
 * @inputValue string
 */
export const SearchInputStore = new Store(
  { inputValue: getInitInputValue(), suggestList: [], loading: false },
  async (state, actionKey, { inputValue }) => {
    switch (actionKey) {
      case 'SET_INPUT_VALUE':
        if (state.inputValue === inputValue) return { ...state };
        // WEAK: side effect 발생 가능성 고려
        SearchInputStore.dispatch('FETCH_SUGGEST', { inputValue });
        return { ...state, inputValue, loading: true };
      case 'FETCH_SUGGEST':
        const suggestList = await RelatedSearchService.suggest(inputValue);
        return { ...state, inputValue, loading: false, suggestList };
      default:
        return { ...state };
    }
  },
);

/**
 * @actionKey `FOCUS_INPUT`
 * @state { isSearchFocused: boolean }
 * @isSearchFocused boolean
 */
export const SearchFocusStore = new Store({ isSearchFocused: false }, (state, actionKey, { isSearchFocused }) => {
  switch (actionKey) {
    case 'FOCUS_INPUT':
      return { ...state, isSearchFocused };
    default:
      return { ...state };
  }
});
