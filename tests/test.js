import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import HomePage from '../pages/index';
import ThemeToggle from '../components/ThemeToggle';

describe('<HomePage />', () => {
  it('should mount', () => {
    render(<HomePage />);
    const homePage = screen.getByTestId('homePage');
    expect(homePage).toBeTruthy();
  });

  it('should toggle the theme', async () => {
    const { container } = render(<HomePage />);
    const button = within(container, () => screen.getByRole('button'));
    fireEvent.click(button);
    await waitFor(() => screen.findByText('Light'));
    fireEvent.click(button);
    await waitFor(() => screen.findByText('Dark'));
  });
});
