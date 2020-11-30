import { RawData } from '../data/types';
import { Transformed } from '../transforms';

export type WorkoutDataContextState = {
  canAccessProtectedPages: boolean;
  loadedSavedSession: boolean;
  original: null | RawData;
  transformed: null | Transformed;
};
