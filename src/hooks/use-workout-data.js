import React from "react";
import transformers, { transform } from "../transforms";
import Router from "next/router";

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
  React.useEffect(() => {
    if (original) {
      const transformed = transform({ data: original, transformers });
      setTransformed(transformed);
      createSavedSession(LOCAL_STORAGE_KEY, original);
    } else {
      const saved = loadSavedSession(LOCAL_STORAGE_KEY);
      if (saved) {
        setOriginal(saved);
      } else {
        Router.push("/");
      }
    }
  }, [original]);
  return {
    ready: !!original && !!transformed,
    original,
    transformed,
    setData: setOriginal,
  };
}
