import React from "react";
import { WorkoutDataContext } from "../contexts/workout-data";

export function useProtectedPage() {
  const ctx = React.useContext(WorkoutDataContext);
  console.log(ctx);
  return {
    redirect: "/",
  };
}
