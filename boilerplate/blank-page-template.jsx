import React from "react";
import { AppLayout } from "../layouts/app-layout";
import { Button } from "../components/button";
import { HorizontalRule } from "../components/horizontal-rule";
import { ProtectedPage } from "../components/protected-page";
import { TRANSFORMED_KEYS } from "../constants";

export const meta = {
  route: "/example",
  title: "Example",
  sidebar: "Example",
  component: Page,
  pagination: {
    previous: null,
    next: null,
  },
};

export function Page() {
  return <ProtectedPage component={PageWithData} />;
}

function PageWithData({ allWorkoutData, pageMetadata }) {
  const pageWorkoutData = allWorkoutData[TRANSFORMED_KEYS.TotalWorkouts];
  return (
    <AppLayout
      title={pageMetadata.title}
      previousRoute={pageMetadata.previousRoute}
      nextRoute={pageMetadata.nextRoute}
    >
      <AppLayout.Content>{pageWorkoutData.total}</AppLayout.Content>
      <HorizontalRule />
      <AppLayout.Content>
        <nav className="d-flex flx-a-c flx-j-sb">
          <Button to={pageMetadata.previousRoute} appearance="ghost">
            <>Previous</>
            <span className="d-none lg:d-inline">: Start over</span>
          </Button>
          <Button appearance="secondary" to={pageMetadata.nextRoute}>
            <>Next</>
            <span className="d-none lg:d-inline">: Instructors</span>
          </Button>
        </nav>
      </AppLayout.Content>
    </AppLayout>
  );
}
