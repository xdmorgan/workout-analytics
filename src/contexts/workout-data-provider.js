import React from "react";
import transformers, { transform } from "../transforms";
import demo from "../data/workouts.json";
import {
  clearSavedSession,
  loadSavedSession,
  createSavedSession,
} from "../utils/local-storage";

export const WorkoutDataContext = React.createContext(null);

const INITIAL_STATE = {
  canAccessProtectedPages: false,
  loadedSavedSession: false,
  original: null,
  transformed: null,
};

function attemptRestoreSession() {
  const saved = loadSavedSession();
  if (!saved) return {};
  return {
    canAccessProtectedPages: true,
    loadedSavedSession: true,
    original: saved,
    transformed: transform({ data: saved, transformers }),
  };
}

function reducer(state, action) {
  console.log(state, action);
  const { type, payload = null } = action;
  switch (type) {
    case "USER_UPLOADED_CSV":
      createSavedSession(payload);
      return {
        ...state,
        canAccessProtectedPages: true,
        original: payload,
        transformed: transform({ data: payload, transformers }),
      };
    case "USER_REQUESTED_DEMO":
      createSavedSession(demo);
      return {
        ...state,
        canAccessProtectedPages: true,
        original: payload,
        transformed: transform({ data: demo, transformers }),
      };
    case "USER_REQUESTED_RESET":
      clearSavedSession();
      return { ...INITIAL_STATE };
    default:
      throw new Error();
  }
}

export function WorkoutDataProvider({ children }) {
  const restored = attemptRestoreSession();
  const initialState = { ...INITIAL_STATE, ...restored };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <WorkoutDataContext.Provider value={value}>
      {children}
    </WorkoutDataContext.Provider>
  );
}
