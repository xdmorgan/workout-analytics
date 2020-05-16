import React from "react";
import { AppLayout } from "../layouts/app-layout";
import { ProtectedPage } from "../components/protected-page";
import { TRANSFORMED_KEYS } from "../constants";

export const meta = {
  route: "/instructors",
  title: "Top Instructors",
  sidebar: "Top Instructors",
  component: Page,
  pagination: {
    previous: "/activity",
    next: null,
  },
};

export function Page() {
  return <ProtectedPage component={PageWithData} />;
}

function PageWithData({ allWorkoutData, pageMetadata }) {
  const pageWorkoutData = allWorkoutData[TRANSFORMED_KEYS.TopInstructors];
  console.log(pageWorkoutData, pageMetadata);
  return (
    <AppLayout
      title={pageMetadata.title}
      previousRoute={pageMetadata.pagination.previous}
      nextRoute={pageMetadata.pagination.next}
    >
      <AppLayout.Content>asdf</AppLayout.Content>
      <AppLayout.Pagination
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      />
    </AppLayout>
  );
}
