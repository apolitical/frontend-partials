// @flow
import type { Action } from '../../../../types';

const TOGGLE_VERTICAL_NAV = 'TOGGLE_VERTICAL_NAV';
export const toggleVerticalNav = (): Action => ({
  type: TOGGLE_VERTICAL_NAV,
});

const TOGGLE_VERTICAL_SEARCH = 'TOGGLE_VERTICAL_SEARCH';
export const toggleVerticalSearch = () : Action => ({
  type: TOGGLE_VERTICAL_SEARCH,
});

type HeaderStateType = {
  showVerticalNav: boolean,
  showVerticalSearch: boolean,
};

const initialState: HeaderStateType = {
  showVerticalNav: false,
  showVerticalSearch: false,
};

const handleToggleVerticalNav = (state) => {
  if (state.showVerticalNav) {
    return {
      ...state,
      showVerticalNav: false,
    };
  }
  return {
    ...state,
    showVerticalNav: true,
    showVerticalSearch: false,
  };
};

const handleToggleVerticalSearch = (state) => {
  if (state.showVerticalSearch) {
    return {
      ...state,
      showVerticalSearch: false,
    };
  }
  return {
    ...state,
    showVerticalSearch: true,
    showVerticalNav: false,
  };
};

export const headerReducer = (
  state: HeaderStateType = initialState,
  action: Action,
) : HeaderStateType => {
  switch (action.type) {
    case TOGGLE_VERTICAL_NAV: {
      return handleToggleVerticalNav(state);
    }
    case TOGGLE_VERTICAL_SEARCH: {
      return handleToggleVerticalSearch(state);
    }
    default: {
      return state;
    }
  }
};
