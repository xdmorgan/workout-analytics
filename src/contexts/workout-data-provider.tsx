import React, { ReactNode } from 'react';
import transformers, { transform } from '../transforms';
import * as demo from '../data/workouts.json';
import { clearSavedSession, createSavedSession } from '../utils/local-storage';
import { attemptRestoreSession } from '../utils/restore-session';
import { WorkoutDataContextState } from './types';
import { RawData } from '../data/types';

export const WorkoutDataContext = React.createContext(null);

type WorkoutContextActionTypes =
  | 'USER_UPLOADED_CSV'
  | 'USER_REQUESTED_DEMO'
  | 'USER_REQUESTED_RESET';

type WorkoutContextAction = {
  type: WorkoutContextActionTypes;
  payload: RawData | null;
};

const INITIAL_STATE: WorkoutDataContextState = {
  canAccessProtectedPages: false,
  loadedSavedSession: false,
  original: null,
  transformed: null,
};

function reducer(state: WorkoutDataContextState, action: WorkoutContextAction) {
  // console.log(state, action);
  const { type, payload = null } = action;
  switch (type) {
    case 'USER_UPLOADED_CSV':
      if (payload) {
        createSavedSession(payload);
        return {
          ...state,
          canAccessProtectedPages: true,
          original: payload,
          transformed: transform({ data: payload, transformers }),
        };
      } else {
        return state;
      }
    case 'USER_REQUESTED_DEMO':
      createSavedSession(demo);
      return {
        ...state,
        canAccessProtectedPages: true,
        original: payload,
        transformed: transform({ data: demo, transformers }),
      };
    case 'USER_REQUESTED_RESET':
      clearSavedSession();
      return { ...INITIAL_STATE };
    default:
      throw new Error();
  }
}

export function WorkoutDataProvider({ children }: { children: ReactNode }) {
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
