import React, { ReactNode } from 'react';
import transformers, { transform } from '../transforms';
import demo from '../data/workouts';
import { clearSavedSession, createSavedSession } from '../utils/local-storage';
import { attemptRestoreSession } from '../utils/restore-session';
import {
  WorkoutDataReducerState,
  WorkoutDataReducerAction,
  WorkoutDataContextProviderValue,
} from './types';

export const WorkoutDataContext = React.createContext<null | WorkoutDataContextProviderValue>(
  null
);

const ERROR_MESSAGE = 'Reducer called with an invalid action.type';

const INITIAL_STATE: WorkoutDataReducerState = {
  canAccessProtectedPages: false,
  loadedSavedSession: false,
  original: null,
  transformed: null,
};

function reducer(
  state: WorkoutDataReducerState,
  action: WorkoutDataReducerAction
) {
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
        return { ...state };
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
      throw new Error(ERROR_MESSAGE);
  }
}

export function WorkoutDataProvider({ children }: { children: ReactNode }) {
  const restored = attemptRestoreSession();
  const initialState = { ...INITIAL_STATE, ...restored };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value: WorkoutDataContextProviderValue = React.useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  );
  return (
    <WorkoutDataContext.Provider value={value}>
      {children}
    </WorkoutDataContext.Provider>
  );
}
