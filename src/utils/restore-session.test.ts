import { RawData } from '../data/types';
import { createSavedSession, clearSavedSession } from './local-storage';
import { attemptRestoreSession } from './restore-session';

describe('attemptRestoreSession()', () => {
  beforeEach(() => {
    clearSavedSession(); // now it does not
  });
  test('Successfully restore previous session', () => {
    const input: RawData = [];
    createSavedSession(input); // now it exists
    const {
      canAccessProtectedPages,
      loadedSavedSession,
      original,
      transformed,
    } = attemptRestoreSession();
    expect(canAccessProtectedPages).toEqual(true);
    expect(loadedSavedSession).toEqual(true);
    expect(original).toEqual(input);
    expect(typeof transformed).toEqual('object');
  });
  // since we spread the resulut of this restoration onto the INITIAL_STATE
  // constant in workout-data-provider, all the undefined keys
  test('Returns empty object when there is no existing session', () => {
    const {
      canAccessProtectedPages,
      loadedSavedSession,
      original,
      transformed,
    } = attemptRestoreSession();
    expect(typeof canAccessProtectedPages).toEqual('undefined');
    expect(typeof loadedSavedSession).toEqual('undefined');
    expect(typeof original).toEqual('undefined');
    expect(typeof transformed).toEqual('undefined');
  });
});
