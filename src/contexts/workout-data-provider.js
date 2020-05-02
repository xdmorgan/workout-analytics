import React from "react";
import transformers, { transform } from "../transforms";
import { loadSavedSession, createSavedSession } from "../utils/local-storage";

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
  const { type, payload } = action;
  switch (type) {
    case "USER_UPLOADED_CSV":
      const transformed = transform({ data: payload, transformers });
      createSavedSession(payload);
      return {
        ...state,
        canAccessProtectedPages: true,
        original: payload,
        transformed,
      };
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
