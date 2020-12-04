import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { WorkoutDataProvider } from '../contexts/workout-data-provider';
import { meta } from './welcome';

const LABELS = {
  flowStartHeading: 'Start here',
  flowCompleteHeading: "You're all set!",
  seeDemoButton: 'See demo',
  resetStateButton: 'Start over',
};

function MockedEnv({ children }: { children: ReactNode }) {
  return (
    <Router>
      <WorkoutDataProvider>{children}</WorkoutDataProvider>
    </Router>
  );
}

describe('Renders without crashing', () => {
  test('Welcomes new users with "start here" message', () => {
    const { getByText } = render(
      <MockedEnv>
        <meta.component />
      </MockedEnv>
    );
    expect(getByText(LABELS.flowStartHeading)).toBeInTheDocument();
  });
});

describe('Demo flow', () => {
  test('Click through the demo data flow', () => {
    const { getByText } = render(
      <MockedEnv>
        <meta.component />
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
