import transformers, { transform } from '../transforms';
import { loadSavedSession } from './local-storage';

export function attemptRestoreSession() {
  const saved = loadSavedSession();
  if (!saved) return {};
  return {
    canAccessProtectedPages: true,
    loadedSavedSession: true,
    original: saved,
    transformed: transform({ data: saved, transformers }),
  };
}
