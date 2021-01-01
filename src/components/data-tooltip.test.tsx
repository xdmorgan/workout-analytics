import { render } from '@testing-library/react';
import { DataTooltip } from './data-tooltip';

test('renders a title if passed in', () => {
  const { getByTestId } = render(
    <DataTooltip title="hey there">Tooltip</DataTooltip>
  );

  expect(getByTestId('tooltip-title')).toBeInTheDocument();
});

test('does not render a title if not passed in', () => {
  const { queryByTestId } = render(<DataTooltip>no title</DataTooltip>);

  expect(queryByTestId('tooltip-title')).not.toBeInTheDocument();
});
