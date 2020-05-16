import React from "react";
import { AppLayout } from "../layouts/app-layout";
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
  const pageWorkoutData = allWorkoutData[TRANSFORMED_KEYS.TopInstructors];
  console.log(pageWorkoutData, pageMetadata);
  return (
    <AppLayout
      title={pageMetadata.title}
      previousRoute={pageMetadata.pagination.previous}
      nextRoute={pageMetadata.pagination.next}
    >
      <AppLayout.Content>
        <div className="wysiwyg child-my-0">
          <h2>Hello</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            reiciendis et, nesciunt quis quia eum vel inventore est debitis ab,
            molestias ex, dolore repellendus? Beatae eos minus laudantium
            placeat eligendi?
          </p>
        </div>
      </AppLayout.Content>
      <AppLayout.Pagination
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      />
    </AppLayout>
  );
}
