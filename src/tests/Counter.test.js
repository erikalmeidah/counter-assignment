import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/count/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterValue = screen.getByText(/0/i);
  expect(counterValue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'));
  const counterValue = screen.getByText(/1/i);
  expect(counterValue).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'));
  const counterValue = screen.getByText(/-1/i);
  expect(counterValue).toBeInTheDocument();
});
