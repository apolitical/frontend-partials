// @flow
import type { Member } from '../../../types';

export type MeAction = (
  { type: 'ME_GET' } |
  { type: 'ME_RECEIVED', me: Member } |
  { type: 'ME_NOT_FOUND' } |
  { type: 'ME_REQUEST_UNAUTHORIZED' }
)

export type MeState = {
  me: ?Member,
  received: boolean,
}

const actions = {
  get: (): MeAction => ({
    type: 'ME_GET',
  }),

  received: (me: Member): MeAction => ({
    me,
    type: 'ME_RECEIVED',
  }),

  notFound: (): MeAction => ({
    type: 'ME_NOT_FOUND',
  }),

  unauthorized: (): MeAction => ({
    type: 'ME_REQUEST_UNAUTHORIZED',
  }),
};

const initialState: MeState = { me: null, received: false };

const meReducer = (
  state?: MeState = initialState,
  action: MeAction,
) : MeState => {
  switch (action.type) {
    case 'ME_NOT_FOUND': {
      return {
        ...state,
        received: true,
        me: null,
      };
    }
    case 'ME_RECEIVED': {
      return {
        ...state,
        received: true,
        me: action.me,
      };
    }
    case 'ME_REQUEST_UNAUTHORIZED': {
      return {
        ...state,
        received: true,
        me: null,
      };
    }
    default: {
      return state;
    }
  }
};

export { actions, meReducer };
