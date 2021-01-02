---
to: src/pages/<%=name%>.test.tsx
---
import * as React from 'react';
import { render } from '@testing-library/react';
import data from '../data/workouts';
import { meta } from './<%=name%>';
import transformers, { transform } from '../transforms';
import { MockedEnv, convertMetaConfigToProp } from '../test-utils';

const transformed = transform({ data, transformers });

const LABELS = {
  pageTitle: meta.title,
};

describe('Renders meta.component without crashing', () => {
  test('Page title is in the document', () => {
    const { getByText } = render(
      <MockedEnv>
        <meta.component
          allWorkoutData={transformed}
          pageMetadata={convertMetaConfigToProp(meta)}
        />
      </MockedEnv>
    );
    expect(getByText(LABELS.pageTitle)).toBeInTheDocument();
  });
});