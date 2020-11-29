import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Button } from './button';

const LABELS = { children: 'hello' };

test('renders <Button /> with required props', () => {
  const { getByText } = render(<Button>{LABELS.children}</Button>);
  expect(getByText(LABELS.children)).toBeInTheDocument();
});

test('renders as custom element with `as` prop', () => {
  const element = 'span';
  const { getByText } = render(<Button as={element}>{LABELS.children}</Button>);
  expect(getByText(LABELS.children).nodeName).toEqual(element.toUpperCase());
});

test('renders as Link with `to` prop', () => {
  const element = 'a';
  const { getByText } = render(
    <Router>
      <Button to="/">{LABELS.children}</Button>
    </Router>
  );
  expect(getByText(LABELS.children).nodeName).toEqual(element.toUpperCase());
});

test('renders as anchor with `href` prop', () => {
  const element = 'a';
  const { getByText } = render(
    <Router>
      <Button href="/">{LABELS.children}</Button>
    </Router>
  );
  expect(getByText(LABELS.children).nodeName).toEqual(element.toUpperCase());
});

describe('<Button.Group />', () => {
  test('renders with required props', () => {
    const { getByText } = render(
      <Button.Group>
        <Button>1</Button>
        <Button>{LABELS.children}</Button>
        <Button>3</Button>
      </Button.Group>
    );
    expect(getByText(LABELS.children)).toBeInTheDocument();
  });

  // skipped, i don't know why this throws for a jest worker error :shrug:
  test('renders custom element with `as` prop', () => {
    const element = 'span';
    const { getByRole } = render(
      <Button.Group as={element}>
        <Button href="/hello">{LABELS.children}</Button>
        <Button href="/hello">{LABELS.children}</Button>
        <Button href="/hello">{LABELS.children}</Button>
      </Button.Group>
    );
    expect(getByRole('group').nodeName).toEqual(element.toUpperCase());
  });
});
