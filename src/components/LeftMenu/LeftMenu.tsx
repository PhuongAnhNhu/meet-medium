import LeftMenu from '.';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('LeftMenu', () => {
  it('renders', () => {
    const { container } = render(<LeftMenu open={false} drawerClose={() => {}} />, { wrapper: MemoryRouter });

    expect(container).toMatchSnapshot();
  });
});
