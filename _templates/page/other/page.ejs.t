---
to: src/pages/<%=name%>.tsx
---
// types
import { PageMetadataConfig, PageProps } from './types';
// components
import { ContentHeader } from '../components/content-header';
import { ContentSection } from '../components/content-section';

function Page({ pageMetadata }: PageProps) {
  console.log({ pageMetadata })
  
  return (
    <>
      <ContentHeader>
        {pageMetadata.title}
      </ContentHeader>
      <ContentSection className="wysiwyg child-my-0">
        <p>
          Incidunt reiciendis et, nesciunt quis quia eum vel inventore est 
          debitis ab, molestias ex, dolore repellendus? Beatae eos minus 
          laudantium placeat eligendi?
        </p>
        <h2>Something</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          reiciendis et, nesciunt quis quia eum vel inventore est debitis ab,
          molestias ex, dolore repellendus?
        </p>
        <h2>Another thing</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          reiciendis et, nesciunt quis quia eum vel inventore est debitis ab,
          molestias ex, dolore repellendus? Beatae eos minus laudantium
          placeat eligendi?
        </p>
      </ContentSection>
    </>
  );
}

export const meta: PageMetadataConfig = {
  route: '/<%=name%>',
  title: '<%= h.changeCase.title(name) %>',
  sidebar: null,
  component: Page,
  protected: false,
};