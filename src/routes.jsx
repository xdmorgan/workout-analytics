import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AppLayout } from './layouts/app-layout';
import pages from './pages';
import { useProtectedPage } from './hooks/use-protected-page';
import { Navigation } from './components/global-navigation';
import { usePageView } from './hooks/use-page-view';

export default function RouterViews() {
  const location = useLocation();
  const { title, route } = pages[location.pathname || '/'];
  usePageView({ title, route, debug: process.env.NODE_ENV === 'development' });

  return (
    <AppLayout navigation={<Navigation />}>
      <Switch>
        {Object.entries(pages).map(([key, meta]) => {
          const RouteElement = meta.protected
            ? ProtectedRoute
            : UnprotectedRoute;
          return (
            <RouteElement
              key={key}
              exact
              path={meta.route}
              meta={meta}
              component={meta.component}
            />
          );
        })}
      </Switch>
    </AppLayout>
  );
}

function ProtectedRoute({ component: Component, meta, ...props }) {
  const { nope, goto, transformed } = useProtectedPage();
  if (nope || !Component) return <Redirect to={goto} />;
  return (
    <Route {...props}>
      <Component allWorkoutData={transformed} pageMetadata={meta} />
    </Route>
  );
}

function UnprotectedRoute({ component: Component, meta, ...props }) {
  return (
    <Route {...props}>
      <Component pageMetadata={meta} />
    </Route>
  );
}
