import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Help from '../pages/Help';
import { BrowserRouter } from 'react-router-dom';
import { delay, mockConsoleError } from './utils';

describe('Help page', () => {
  mockConsoleError();

  test('Help component renders correctly', () => {
    render(
      <BrowserRouter>
        <Help />
      </BrowserRouter>,
    );

    // Check if the components are rendered correctly
    expect(screen.getByText('🟡 Story')).toBeInTheDocument();
    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('Front')).toBeInTheDocument();
  });

  test('Clicking on buttons navigates to the correct route', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Help />
      </BrowserRouter>,
    );

    // Wrap the userEvent.click in act
    await act(async () => {
      userEvent.click(getByText('Back'));
      await delay(300);
      expect(window.location.pathname).toBe('/stage');
    });

    await act(async () => {
      userEvent.click(getByText('Main'));
      await delay(300);
      expect(window.location.pathname).toBe('/');
    });

    await act(async () => {
      userEvent.click(getByText('Front'));
      await delay(300);
      expect(window.location.pathname).toBe('/stage');
    });
  });
});
