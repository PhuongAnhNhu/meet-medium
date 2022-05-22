import Header from '.';
import { render } from '@testing-library/react';
import { wrapWithStore } from 'tests/wrappers';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders', () => {
    const { container } = render(wrapWithStore(<Header />), { wrapper: MemoryRouter });

    expect(container).toMatchSnapshot();
  });
});
