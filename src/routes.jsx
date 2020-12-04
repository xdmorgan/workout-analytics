import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AppLayout } from './layouts/app-layout';
import pages from './pages';
import { useProtectedPage } from './hooks/use-protected-page';
import { usePageMeta } from './hooks/use-page-meta';
import { Navigation } from './components/global-navigation';
import { usePageView } from './hooks/use-page-view';

export default function RouterViews() {
  const location = useLocation();
  const { title, route } = pages[location.pathname || '/'];
  const debug = process.env.NODE_ENV === 'development';
  usePageView({ title, route, debug });
  return (
    <AppLayout navigation={<Navigation />}>
      <Switch>
        {Object.entries(pages).map(([name, meta]) => {
          const RouteElement = meta.protected ? ProtectedRoute : Route;
          return (
            <RouteElement
              key={meta.route}
              exact
              path={meta.route}
              component={meta.component}
            />
          );
        })}
      </Switch>
    </AppLayout>
  );
}

function ProtectedRoute({ component: Component, ...props }) {
  const { nope, goto, transformed } = useProtectedPage();
  const meta = usePageMeta();
  if (nope || !Component) return <Redirect to={goto} />;
  return (
    <Route {...props}>
      <Component allWorkoutData={transformed} pageMetadata={meta} />
    </Route>
  );
}
