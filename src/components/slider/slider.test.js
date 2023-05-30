import { render, screen } from '@testing-library/react';
import Slider from './slider';

test('renders Slider', () => {
  render(<Slider />);
  const el = screen.getByText(/Previous/i);
  expect(el).toBeInTheDocument();
});
