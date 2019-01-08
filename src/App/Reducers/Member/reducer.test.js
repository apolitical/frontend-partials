// @flow
import { createMemberReducer } from './reducer';

import { createMockUserMinimal } from '../../../../helpers/mocks';

const memberReducer = createMemberReducer('MEMBER').reducer;

const initialState = { member: null, received: true };

describe('memberReducer', () => {
  describe('MEMEBER_GET', () => {
    it('should return initial state when passed undefined', () => {
      expect(memberReducer(
        undefined,
        {
          ...createMockUserMinimal(),
          type: 'MEMEBER_GET',
          name: 'JimWithNoProfile',
        },
      )).toMatchObject({ member: null, received: false });
    });
  });

  describe('MEMBER_RECEIVED', () => {
    it('should return initial state when passed undefined', () => {
      const member = { ...createMockUserMinimal(), slug: 'JimWithNoProfile' };
      const state = memberReducer(undefined, {
        member,
        type: 'MEMBER_RECEIVED',
      });
      expect(state).toMatchObject({ member, received: true });
    });
  });

  describe('MEMBER_NOT_FOUND', () => {
    it('should return initial state when passed undefined', () => {
      expect(memberReducer(
        undefined,
        { type: 'MEMBER_NOT_FOUND' },
      )).toMatchObject(initialState);
    });
  });

  describe('MEMBER_REQUEST_UNAUTHORIZED', () => {
    it('should return initial state when passed undefined', () => {
      expect(memberReducer(
        undefined,
        { type: 'MEMBER_REQUEST_UNAUTHORIZED' },
      )).toMatchObject(initialState);
    });
  });
});
