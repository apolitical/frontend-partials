// @flow
import { meReducer } from './MeReducer';
import { createMockUserMinimal } from '../../../../helpers/mocks';

const failedState = { me: null, received: true };

describe('meReducer', () => {
  describe('ME_GET', () => {
    it('should return initial state when passed undefined', () => {
      expect(meReducer(
        undefined,
        {
          type: 'ME_GET',
        },
      )).toMatchObject({ me: null, received: false });
    });
  });

  describe('ME_RECEIVED', () => {
    it('should return initial state when passed undefined', () => {
      const me = { ...createMockUserMinimal(), slug: 'JimWithNoProfile' };
      const state = meReducer(undefined, {
        me,
        type: 'ME_RECEIVED',
      });
      expect(state).toMatchObject({ me, received: true });
    });
  });

  describe('ME_NOT_FOUND', () => {
    it('should return initial state when passed undefined', () => {
      expect(meReducer(
        undefined,
        { type: 'ME_NOT_FOUND' },
      )).toMatchObject(failedState);
    });
  });

  describe('ME_REQUEST_UNAUTHORIZED', () => {
    it('should return initial state when passed undefined', () => {
      expect(meReducer(
        undefined,
        { type: 'ME_REQUEST_UNAUTHORIZED' },
      )).toMatchObject(failedState);
    });
  });
});
