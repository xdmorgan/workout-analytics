import { useContext, useEffect } from 'react';
import { render, waitFor } from '@testing-library/react';
import {
  WorkoutDataContext,
  WorkoutDataProvider,
} from './workout-data-provider';
import { WorkoutDataContextProviderValue } from './types';
import { RawData } from '../data/types';
import { clearSavedSession } from '../utils/local-storage';

const LABELS = {
  upload: 'Upload CSV',
  demo: 'Request Demo',
  reset: 'Reset Data',
};

function MockInterface({
  onContextChange,
  payload,
}: {
  onContextChange: (ctx: WorkoutDataContextProviderValue) => void;
  payload?: RawData;
}) {
  const ctx = useContext(WorkoutDataContext);
  useEffect(() => onContextChange(ctx), [onContextChange, ctx]);
  return (
    <>
      <button
        onClick={() => ctx.dispatch({ type: 'USER_UPLOADED_CSV', payload })}
      >
        {LABELS.upload}
      </button>
      <button onClick={() => ctx.dispatch({ type: 'USER_REQUESTED_DEMO' })}>
        {LABELS.demo}
      </button>
      <button onClick={() => ctx.dispatch({ type: 'USER_REQUESTED_RESET' })}>
        {LABELS.reset}
      </button>
    </>
  );
}
// do all not each as the third test checks what was written to storage in the second
beforeAll(clearSavedSession);
afterAll(clearSavedSession);

test('context is reasonable even outside of provider', async () => {
  const onContextChange = jest.fn();
  render(<MockInterface onContextChange={onContextChange} />);
  const [[initial]] = onContextChange.mock.calls as null[][];
  expect(initial).toMatchInlineSnapshot(`
    Object {
      "dispatch": [Function],
      "state": Object {
        "canAccessProtectedPages": false,
        "loadedSavedSession": false,
        "original": null,
        "transformed": null,
      },
    }
  `);
});

test('User upload with no payload data has no effect (simulate failed CSV parse)', async () => {
  const onContextChange = jest.fn();
  const { getByText } = render(
    <WorkoutDataProvider>
      <MockInterface onContextChange={onContextChange} />
    </WorkoutDataProvider>
  );
  expect(getByText(LABELS.upload)).toBeInTheDocument();
  getByText(LABELS.upload).click();
  // First call is initial render with restored state (INITIAL_STATE in this
  // case). Without waiting for the transformers to finish and trigger the
  // effect, there's a race condition here
  await waitFor(() => expect(onContextChange.mock.calls.length).toEqual(2));
  const [, [withoutPayload]] = onContextChange.mock
    .calls as WorkoutDataContextProviderValue[][];
  expect(withoutPayload.state).toMatchInlineSnapshot(`
    Object {
      "canAccessProtectedPages": false,
      "loadedSavedSession": false,
      "original": null,
      "transformed": null,
    }
  `);
});

const input: RawData = [];

test('User upload with payload data is run through transformers, written to localStorage, and protected page access is granted', async () => {
  const onContextChange = jest.fn();
  const { getByText } = render(
    <WorkoutDataProvider>
      <MockInterface onContextChange={onContextChange} payload={input} />
    </WorkoutDataProvider>
  );
  expect(getByText(LABELS.upload)).toBeInTheDocument();
  getByText(LABELS.upload).click();
  // First call is initial render with restored state (INITIAL_STATE in this
  // case). Without waiting for the transformers to finish and trigger the
  // effect, there's a race condition here
  await waitFor(() => expect(onContextChange.mock.calls.length).toEqual(2));
  const [[initial], [uploaded]] = onContextChange.mock
    .calls as WorkoutDataContextProviderValue[][];

  // was initital state
  expect(initial.state).toMatchInlineSnapshot(`
    Object {
      "canAccessProtectedPages": false,
      "loadedSavedSession": false,
      "original": null,
      "transformed": null,
    }
  `);

  // now it isnt
  expect(uploaded.state.canAccessProtectedPages).toEqual(true);
  expect(uploaded.state.loadedSavedSession).toEqual(false);
  expect(uploaded.state.original).toEqual(input);
  expect(typeof uploaded.state.transformed).toEqual('object');
});

test('Restores data from localStorage written by the previous test', async () => {
  // a side effect of the user data upload is a write to localStorage
  // here we simulate a page refresh and check that previously written
  // data is preserved and available on the initial render. test method
  // seems sketch, but its important functionality

  const onContextChange = jest.fn();

  render(
    <WorkoutDataProvider>
      <MockInterface onContextChange={onContextChange} />
    </WorkoutDataProvider>
  );

  const [[initial]] = onContextChange.mock
    .calls as WorkoutDataContextProviderValue[][];

  // was initital state
  expect(initial.state.canAccessProtectedPages).toEqual(true);
  expect(initial.state.loadedSavedSession).toEqual(true);
  expect(initial.state.original).toEqual(input);
  expect(typeof initial.state.transformed).toEqual('object');
});

test('Data is restored from previous tests then reset by user', async () => {
  const onContextChange = jest.fn();
  const { getByText } = render(
    <WorkoutDataProvider>
      <MockInterface onContextChange={onContextChange} />
    </WorkoutDataProvider>
  );
  expect(getByText(LABELS.reset)).toBeInTheDocument();
  getByText(LABELS.reset).click();
  // First call is initial render with restored state (INITIAL_STATE in this
  // case). Without waiting for the transformers to finish and trigger the
  // effect, there's a race condition here
  await waitFor(() => expect(onContextChange.mock.calls.length).toEqual(2));
  const [[initial], [reset]] = onContextChange.mock
    .calls as WorkoutDataContextProviderValue[][];
  expect(initial.state.canAccessProtectedPages).toEqual(true);
  expect(initial.state.loadedSavedSession).toEqual(true);
  expect(initial.state.original).toEqual(input);
  expect(typeof initial.state.transformed).toEqual('object');
  expect(reset.state).toMatchInlineSnapshot(`
      Object {
        "canAccessProtectedPages": false,
        "loadedSavedSession": false,
        "original": null,
        "transformed": null,
      }
    `);
});

test('After resetting their data in previous, user requests demo data set', async () => {
  const onContextChange = jest.fn();
  const { getByText } = render(
    <WorkoutDataProvider>
      <MockInterface onContextChange={onContextChange} />
    </WorkoutDataProvider>
  );
  expect(getByText(LABELS.demo)).toBeInTheDocument();
  getByText(LABELS.demo).click();
  // First call is initial render with restored state (INITIAL_STATE in this
  // case). Without waiting for the transformers to finish and trigger the
  // effect, there's a race condition here
  await waitFor(() => expect(onContextChange.mock.calls.length).toEqual(2));
  const [[initial], [requested]] = onContextChange.mock
    .calls as WorkoutDataContextProviderValue[][];
  expect(initial.state).toMatchInlineSnapshot(`
      Object {
        "canAccessProtectedPages": false,
        "loadedSavedSession": false,
        "original": null,
        "transformed": null,
      }
    `);
  expect(requested.state.canAccessProtectedPages).toEqual(true);
  expect(requested.state.loadedSavedSession).toEqual(false);
  expect(typeof requested.state.original).toEqual('object');
  expect(typeof requested.state.transformed).toEqual('object');
});
