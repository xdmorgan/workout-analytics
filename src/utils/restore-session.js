import transformers, { transform } from "../transforms";
import { loadSavedSession } from "./local-storage";

export function attemptRestoreSession() {
  const saved = loadSavedSession();
  return {
    loadedSavedSession: !!saved,
    original: saved ? saved : null,
    transformed: saved ? transform({ data: saved, transformers }) : null,
  };
}
