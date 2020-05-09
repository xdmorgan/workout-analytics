import React from "react";
import { WorkoutDataContext } from "../contexts/workout-data-provider";

export function useProtectedPage({ redirect = "/" } = {}) {
  const { state } = React.useContext(WorkoutDataContext);
  return {
    nope: !state.canAccessProtectedPages,
    goto: state.canAccessProtectedPages ? null : redirect,
    transformed: state.transformed,
  };
}
