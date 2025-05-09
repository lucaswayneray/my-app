// src/components/BookingForm.test.js
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe("BookingForm HTML5 Validation", () => {
  const mockDispatch = jest.fn();
  const mockSubmit = jest.fn();
  const availableTimes = ["17:00", "18:00"];

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );
  });

  test("Date input has required and type='date'", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("type", "date");
  });

  test("Time select has required attribute", () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test("Guests input has min, max, required, and type='number'", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("type", "number");
  });

  test("Occasion select has required attribute", () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });

  test("Submit button is present", () => {
    const button = screen.getByRole("button", { name: /make your reservation/i });
    expect(button).toBeInTheDocument();
  });
});
