import React from 'react';
import { meta } from './average-metrics';
import data from '../data/workouts.json';
import transformers, { transform } from '../transforms';
import { render } from '@testing-library/react';

const transformed = transform({ data, transformers });
const paginateMetadata = ({ component, ...rest }) => ({
  ...rest,
  pagination: { previous: null, next: null },
});

describe('Average Metrics (Page)', () => {
  test('Renders Page with workout and meta data', () => {
    const { getByText } = render(
      <meta.component
        allWorkoutData={transformed}
        pageMetadata={paginateMetadata(meta)}
      />
    );
    expect(getByText('average metrics', { exact: false })).toBeInTheDocument();
  });
});
