import { LOCAL_STORAGE_KEY } from '../constants';
import { RawData } from '../data/types';

export function createSavedSession(value: RawData) {
  if (global && global.localStorage && global.localStorage.setItem) {
    try {
      global.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
    } catch (error) {
      console.log('createSavedSession()', error);
    }
  }
}

export function clearSavedSession() {
  if (global && global.localStorage && global.localStorage.removeItem) {
    try {
      global.localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (error) {
      console.log('clearSavedSession()', error);
    }
  }
}

export function loadSavedSession(): RawData | null {
  if (global && global.localStorage && global.localStorage.getItem) {
    try {
      const entry = global.localStorage.getItem(LOCAL_STORAGE_KEY);
      return entry ? JSON.parse(entry) : null;
    } catch (error) {
      console.log('loadSavedSession()', error);
    }
  }
  return null;
}
