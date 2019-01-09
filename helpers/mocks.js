// @flow
import deepFreeze from 'deep-freeze';
import type { Member } from '../src/types';

// "Fix" Jests stupid type errors
// This is actually just a spanner to throw into Flow, try to avoid using it unless necessary.
export const mockFn = (fn: any) => fn;

// ToDo: Looks to me like the Member type definition is wrong, contains too much stuff.

// Adding ESLint Ignore as it's likely that we'll extend this in fugure,
//  and we don't want to introduce backwards compatibility issues
/* eslint-disable import/prefer-default-export */
export const createMockUserMinimal = (): Member => (deepFreeze({
  slug: 'bob-fish',
  memberType: 'non-public-servant',
  name: 'Bob Fish',
  title: '',
  jobTitle: '',
  organization: null,
  alumnum: false,
  expertise: [],
  sector: 'Dentistry',
  image: {
    full: '',
    title: '',
    thumbnail: '',
  },
  location: {
    latitude: 25,
    longitude: 25,
  },
  contactStatus: 'anyone',
  visibility: 'private',
}));
