import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm legend', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const legendElement = screen.getByText("Book Your Reservation");
  expect(legendElement).toBeInTheDocument();
});
