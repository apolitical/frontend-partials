// TODO return flow header and fix flow types using ${prefix}
import type { Action, Member, MemberStateType } from '../../../types';

export const createMemberReducer = (prefix: string) => ({
  actions: {
    get: (slug: string): Action => ({
      slug,
      type: `${prefix}_GET`,
    }),

    received: (member: Member): Action => ({
      member,
      type: `${prefix}_RECEIVED`,
    }),

    notFound: (): Action => ({
      type: `${prefix}_NOT_FOUND`,
    }),

    unauthorized: (): Action => ({
      type: `${prefix}_REQUEST_UNAUTHORIZED`,
    }),
  },

  reducer: (
    state?: MemberStateType = { member: null, received: false },
    action: Action,
  ) : MemberStateType => {
    switch (action.type) {
      case `${prefix}_NOT_FOUND`: {
        return {
          ...state,
          received: true,
          member: null,
        };
      }
      case `${prefix}_RECEIVED`: {
        return {
          ...state,
          received: true,
          member: action.member,
        };
      }
      case `${prefix}_REQUEST_UNAUTHORIZED`: {
        return {
          ...state,
          received: true,
          member: null,
        };
      }
      default: {
        return state;
      }
    }
  },
});

export { createMemberReducer as default };
