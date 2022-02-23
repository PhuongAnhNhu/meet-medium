import { render } from '@testing-library/react';
import { wrapWithStore } from 'tests/wrappers';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(wrapWithStore(<App />));

  expect(container).toMatchSnapshot();
});
