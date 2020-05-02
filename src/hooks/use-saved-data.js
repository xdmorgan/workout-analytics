import transformers, { transform } from "../transforms";
import { loadSavedSession } from "../utils/localstorage";

export function useSavedData() {
  const saved = loadSavedSession();
  return {
    loadedSavedSession: !!saved,
    original: saved ? saved : null,
    transformed: saved ? transform({ data: original, transformers }) : null,
  };
}
