import { render } from '@testing-library/react';
import { wrapWithStore } from 'tests/wrappers';
import Homepage from '.';

describe('HomePage', () => {
  it('renders', () => {
    const { container } = render(wrapWithStore(<Homepage />));

    expect(container).toMatchSnapshot();
  });
});
