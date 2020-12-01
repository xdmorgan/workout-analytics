import React from 'react';
import { render } from '@testing-library/react';
import { AppLayout } from './app-layout';

test('renders <AppLayout /> with required props', () => {
  const text = {
    navigation: 'navigation',
    children: 'content',
  };

  const { getByText } = render(
    <AppLayout navigation={<div>{text.navigation}</div>}>
      <div>{text.children}</div>
    </AppLayout>
  );

  expect(getByText(text.navigation)).toBeInTheDocument();
  expect(getByText(text.children)).toBeInTheDocument();
});
