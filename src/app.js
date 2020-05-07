import React from "react";
import { WorkoutDataProvider } from "./contexts/workout-data-provider";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import "./styles/global.scss";

export default function App() {
  return (
    <Router>
      <WorkoutDataProvider>
        <Routes />
      </WorkoutDataProvider>
    </Router>
  );
}
