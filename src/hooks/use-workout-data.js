import React from "react";
// import data from "../data/workouts";
import transformers, { transform } from "../transforms";

export function useWorkoutData() {
  const [original, setOriginal] = React.useState(null);
  const [transformed, setTransformed] = React.useState(null);
  React.useEffect(() => {
    if (original) {
      setTransformed(transform({ data: original, transformers }));
    }
  }, [original]);
  return {
    ready: !!original && !!transformed,
    original,
    transformed,
    setData: setOriginal,
  };
}
