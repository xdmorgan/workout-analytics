import { PageMetadataConfig, PageMetadataProp } from './pages/types';

// strip self-component reference and replace with pagination, if needed
export const convertMetaConfigToProp = ({
  component,
  ...rest
}: PageMetadataConfig): PageMetadataProp => ({
  ...rest,
  pagination: { previous: null, next: null },
});
