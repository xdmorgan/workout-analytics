---
to: src/pages/<%=name%>.tsx
---
// types
import { PageMetadataConfig, PageProps } from './types';
// constants
import * as TRANSFORMED_KEYS from '../transforms/keys';
// components
import { ContentHeader } from '../components/content-header';
import { ContentSection } from '../components/content-section';
import { Pagination } from '../components/pagination';

function Page({ allWorkoutData, pageMetadata }: PageProps) {
  const totalWorkouts = allWorkoutData?.[TRANSFORMED_KEYS.TotalWorkouts];
  console.log({ pageMetadata, totalWorkouts })
  return (
    <>
      <ContentHeader
        previousRoute={pageMetadata.pagination?.previous}
        nextRoute={pageMetadata.pagination?.next}
      >
        {pageMetadata.title}
      </ContentHeader>
      <ContentSection className="wysiwyg child-my-0">
        <h2>First Section</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          reiciendis et, nesciunt quis quia eum vel inventore est debitis ab,
          molestias ex, dolore repellendus? Beatae eos minus laudantium
          placeat eligendi?
        </p>
      </ContentSection>
      <ContentSection>
        <div className="wysiwyg child-my-0">
          <h2>Second Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            reiciendis et, nesciunt quis quia eum vel inventore est debitis ab,
            molestias ex, dolore repellendus? Beatae eos minus laudantium
            placeat eligendi?
          </p>
        </div>
        <pre>
          <code>{JSON.stringify(allWorkoutData, null, 2)}</code>
        </pre>
      </ContentSection>
      <Pagination
        previousRoute={pageMetadata.pagination?.previous}
        nextRoute={pageMetadata.pagination?.next}
      />
    </>
  );
}

export const meta: PageMetadataConfig = {
  route: '/<%=name%>',
  title: '<%= h.changeCase.title(name) %>',
  sidebar: '<%= h.changeCase.title(name) %>',
  component: Page,
  protected: true,
};