import React, { ReactNode } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { WorkoutDataProvider } from './contexts/workout-data-provider';
import { PageMetadataConfig, PageMetadataProp } from './pages/types';

// strip self-component reference and replace with pagination, if needed
export const convertMetaConfigToProp = (
  { component, ...rest }: PageMetadataConfig,
  { pagination = { previous: null, next: null } } = {}
): PageMetadataProp => ({
  ...rest,
  pagination,
});

/**
 * Wrap children in MemoryRouter and WorkoutDataProvider
 */
export function MockedEnv({ children }: { children: ReactNode }) {
  return (
    <Router>
      <WorkoutDataProvider>{children}</WorkoutDataProvider>
    </Router>
  );
}
