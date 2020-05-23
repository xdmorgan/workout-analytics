import React from "react";
import { Switch, Route } from "react-router-dom";
import { AppLayout } from "./layouts/app-layout";
import pages from "./pages";

export default function RouterViews() {
  return (
    <AppLayout>
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
    </AppLayout>
  );
}
