import React from "react";
import { Switch, Route } from "react-router-dom";
import pages from "./pages";

export default function RouterViews() {
  return (
    <Switch>
      {Object.entries(pages).map(([name, meta]) => (
        <Route
          key={meta.route}
          exact
          path={meta.route}
          component={meta.component}
        ></Route>
      ))}
    </Switch>
  );
}
