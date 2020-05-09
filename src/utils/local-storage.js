import { LOCAL_STORAGE_KEY } from "../constants";

export function createSavedSession(value) {
  if (global && global.localStorage && global.localStorage.setItem) {
    try {
      global.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
    } catch (error) {
      console.log("createSavedSession()", error);
    }
  }
}

export function clearSavedSession() {
  if (global && global.localStorage && global.localStorage.removeItem) {
    try {
      global.localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (error) {
      console.log("clearSavedSession()", error);
    }
  }
}

export function loadSavedSession() {
  if (global && global.localStorage && global.localStorage.getItem) {
    try {
      const entry = global.localStorage.getItem(LOCAL_STORAGE_KEY);
      return JSON.parse(entry);
    } catch (error) {
      console.log("loadSavedSession()", error);
    }
  }
}
