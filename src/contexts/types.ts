import { RawData } from '../data/types';
import { Transformed } from '../transforms';

export type WorkoutDataReducerState = {
  canAccessProtectedPages: boolean;
  loadedSavedSession: boolean;
  original: null | RawData;
  transformed: null | Transformed;
};

export type WorkoutDataReducerActionTypes =
  | 'USER_UPLOADED_CSV'
  | 'USER_REQUESTED_DEMO'
  | 'USER_REQUESTED_RESET';

export type WorkoutDataReducerAction = {
  type: WorkoutDataReducerActionTypes;
  payload?: RawData;
};

export type WorkoutDataContextProviderValue = {
  state: WorkoutDataReducerState;
  dispatch: React.Dispatch<WorkoutDataReducerAction>;
};
