import LoginPage from '.';
import { render } from '@testing-library/react';
import { wrapWithStore } from 'tests/wrappers';

describe('LoginPage', () => {
  it('renders', () => {
    const { container } = render(wrapWithStore(<LoginPage />));

    expect(container).toMatchSnapshot();
  });
});
