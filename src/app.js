import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { ScrollToTop } from "./components/scroll-to-top";
import { WorkoutDataProvider } from "./contexts/workout-data-provider";

import "./styles/global.scss";

export default function App() {
  return (
    <Router>
      <WorkoutDataProvider>
        <ScrollToTop />
        <Routes />
      </WorkoutDataProvider>
    </Router>
  );
}
