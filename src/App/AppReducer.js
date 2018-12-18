// @flow
import type { ActionType } from '../types';


const CLICKED = 'CLICKED';
export const clickedAction = (): ActionType => ({
  type: CLICKED,
});


type AppStateType = {
  clicked: boolean,
};

const initialState: AppStateType = {
  clicked: false,
};

export const appReducer = (state: AppStateType = initialState, action: ActionType) : AppStateType => {
  switch (action.type) {
    case CLICKED: {
      return { clicked: !state.clicked };
    }
    default: {
      return state;
    }
  }
};
