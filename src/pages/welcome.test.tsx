import React from 'react';
import { meta } from './welcome';
import { render } from '@testing-library/react';
import { WorkoutDataProvider } from '../contexts/workout-data-provider';

describe('Welcome (Page)', () => {
  test('Renders Page with meta data', () => {
    const { getByText } = render(
      <WorkoutDataProvider>
        <meta.component />
      </WorkoutDataProvider>
    );
    expect(getByText('start here', { exact: false })).toBeInTheDocument();
  });
});
