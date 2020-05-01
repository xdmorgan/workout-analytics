import React from "react";
import { WorkoutDataProvider } from "./contexts/workout-data-provider";
import WelcomePage from "./pages/welcome";

export default function App() {
  return (
    <WorkoutDataProvider>
      <WelcomePage />
    </WorkoutDataProvider>
  );
}
