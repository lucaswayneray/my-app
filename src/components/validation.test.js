import {
    isDateValid,
    isTimeValid,
    isGuestsValid,
    isOccasionValid
  } from '../utils/validation';
  
  test('isDateValid returns true for a valid date', () => {
    expect(isDateValid('2025-05-10')).toBe(true);
  });
  
  test('isTimeValid returns true for a valid time', () => {
    expect(isTimeValid('19:00')).toBe(true);
  });
  
  test('isGuestsValid returns true for 1-10', () => {
    expect(isGuestsValid(5)).toBe(true);
    expect(isGuestsValid(0)).toBe(false);
  });
  
  test('isOccasionValid works as expected', () => {
    expect(isOccasionValid('Birthday')).toBe(true);
    expect(isOccasionValid('Wedding')).toBe(false);
  });
  