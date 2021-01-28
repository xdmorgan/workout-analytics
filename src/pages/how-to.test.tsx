import * as React from 'react';
import { render } from '@testing-library/react';
import { meta } from './how-to';
import { MockedEnv, convertMetaConfigToProp } from '../test-utils';

const LABELS = {
  pageTitle: meta.title,
};

describe('Renders meta.component without crashing', () => {
  test('Page title is in the document', () => {
    const { getByText } = render(
      <MockedEnv>
        <meta.component
          pageMetadata={convertMetaConfigToProp(meta, { pagination: false })}
        />
      </MockedEnv>
    );
    expect(getByText(LABELS.pageTitle)).toBeInTheDocument();
  });
});
