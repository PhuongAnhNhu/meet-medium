import { render } from '@testing-library/react';
import { wrapWithStore } from 'tests/wrappers';
import CreateMeeting from '.';

describe('CreateMeeting', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2022-01-01T01:00:00').getTime());
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders', () => {
    const { container } = render(wrapWithStore(<CreateMeeting />));

    expect(container).toMatchSnapshot();
  });
});
