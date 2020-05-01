import React from "react";
import transformers, { transform } from "../transforms";

const APP_VERSION = process.env.APP_VERSION || 1;
const LOCAL_STORAGE_KEY = `workout-data-v${APP_VERSION}`;

function createSavedSession(key, value) {
  if (window && window.localStorage && window.localStorage.setItem) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("createSavedSession()", error);
    }
  }
}

function loadSavedSession(key) {
  if (window && window.localStorage && window.localStorage.getItem) {
    try {
      const entry = window.localStorage.getItem(key);
      return JSON.parse(entry);
    } catch (error) {
      console.log("loadSavedSession()", error);
    }
  }
}

export function useWorkoutData() {
  const [original, setOriginal] = React.useState(null);
  const [transformed, setTransformed] = React.useState(null);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!original) {
      // if there's no original data, try and retrieve it from ls
      // if found, set it and trigger the transform in the condition above
      const saved = loadSavedSession(LOCAL_STORAGE_KEY);
      if (saved) {
        setOriginal(saved);
      }
    }
  }, []);

  React.useEffect(() => {
    if (original) {
      // original was set by file upload or below in else clause from
      // localstorage retrieval
      const transformed = transform({ data: original, transformers });
      setTransformed(transformed);
      createSavedSession(LOCAL_STORAGE_KEY, original);
    }
    setReady(true); // this is annoying!
  }, [original]);

  return {
    ready,
    canAccess: !!original && !!transformed,
    original,
    transformed,
    setData: setOriginal,
  };
}
