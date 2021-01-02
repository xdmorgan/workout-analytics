import { Transformed } from '../transforms';

export interface PageMetadataProp {
  route: string;
  title: string;
  sidebar: string;
  protected: boolean;
  pagination?: {
    previous: null | string;
    next: null | string;
  };
}

export interface PageProps {
  allWorkoutData?: Transformed;
  pageMetadata: PageMetadataProp;
}

export type PageMetadataConfig = {
  route: string;
  title: string;
  sidebar: string;
  component: (props: PageProps) => JSX.Element;
  protected: boolean;
};
