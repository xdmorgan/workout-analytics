import React from 'react';
import { render } from '@testing-library/react';
import { MockedEnv, convertMetaConfigToProp } from '../test-utils';
import { meta } from './welcome';

const LABELS = {
  flowStartHeading: 'Start here',
  flowCompleteHeading: "You're all set!",
  flowUploaderHeading: 'Add data',
  uploadDataButton: 'Analyze my workouts',
  uploadCancelButton: 'Cancel',
  uploadBrowseFilesButton: 'Select file',
  seeDemoButton: 'See demo',
  resetStateButton: 'Start over',
};

describe('Renders without crashing', () => {
  test('Welcomes new users with "start here" message', () => {
    const { getByText } = render(
      <MockedEnv>
        <meta.component pageMetadata={convertMetaConfigToProp(meta)} />
      </MockedEnv>
    );
    expect(getByText(LABELS.flowStartHeading)).toBeInTheDocument();
  });
});

describe('Demo flow', () => {
  test('Click through the demo data flow', () => {
    const { getByText } = render(
      <MockedEnv>
        <meta.component pageMetadata={convertMetaConfigToProp(meta)} />
      </MockedEnv>
    );
    // start with welcome
    expect(getByText(LABELS.flowStartHeading)).toBeInTheDocument();
    expect(getByText(LABELS.seeDemoButton)).toBeInTheDocument();
    getByText(LABELS.seeDemoButton).click();
    // expect that demo data is accepted and ready to proceed to protected pages
    expect(getByText(LABELS.flowCompleteHeading)).toBeInTheDocument();
    expect(getByText(LABELS.resetStateButton)).toBeInTheDocument();
    // now reset data
    getByText(LABELS.resetStateButton).click();
    // and back to square one
    expect(getByText(LABELS.flowStartHeading)).toBeInTheDocument();
  });
});

describe('Upload flow', () => {
  // TODO: test  upload (requires a bunch of mocks)
  // https://github.com/testing-library/react-testing-library/issues/93
  test('Click through the upload data flow but cancel at the uploader?', () => {
    const { getByText } = render(
      <MockedEnv>
        <meta.component pageMetadata={convertMetaConfigToProp(meta)} />
      </MockedEnv>
    );
    // start with welcome
    expect(getByText(LABELS.flowStartHeading)).toBeInTheDocument();
    expect(getByText(LABELS.uploadDataButton)).toBeInTheDocument();
    getByText(LABELS.uploadDataButton).click();
    // click to browse files and fake uploading of data
    expect(getByText(LABELS.flowUploaderHeading)).toBeInTheDocument();
    expect(getByText(LABELS.uploadBrowseFilesButton)).toBeInTheDocument();
    expect(getByText(LABELS.uploadCancelButton)).toBeInTheDocument();
    getByText(LABELS.uploadCancelButton).click();
    // and back to square one
    expect(getByText(LABELS.flowStartHeading)).toBeInTheDocument();
  });
});
