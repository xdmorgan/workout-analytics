import React from "react";
import { ContentHeader } from "../components/content-header";
import { ContentSection } from "../components/content-section";
import { Pagination } from "../components/pagination";
import { TRANSFORMED_KEYS } from "../transforms/types";

export const meta = {
  route: "/example",
  title: "Example",
  sidebar: "Example",
  component: Page,
  protected: true,
};

export function Page({ allWorkoutData, pageMetadata }) {
  const pageWorkoutData = allWorkoutData[TRANSFORMED_KEYS.TopInstructors];
  console.log(pageWorkoutData, pageMetadata);
  return (
    <>
      <ContentHeader
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      >
        {pageMetadata.title}
      </ContentHeader>
      <ContentSection>
        <div className="wysiwyg child-my-0">
          <h2>Hello</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            reiciendis et, nesciunt quis quia eum vel inventore est debitis ab,
            molestias ex, dolore repellendus? Beatae eos minus laudantium
            placeat eligendi?
          </p>
        </div>
      </ContentSection>
      <Pagination
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      />
    </>
  );
}
