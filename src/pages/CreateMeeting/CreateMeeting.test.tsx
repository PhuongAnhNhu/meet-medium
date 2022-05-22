import { render } from '@testing-library/react';
import { wrapWithStore } from 'tests/wrappers';
import CreateMeeting from '.';

describe('CreateMeeting', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2022-05-22'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders', () => {
    const { container } = render(wrapWithStore(<CreateMeeting />));

    expect(container).toMatchSnapshot();
  });
});
