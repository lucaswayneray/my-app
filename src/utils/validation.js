// src/validation.js

export function isDateValid(date) {
    return Boolean(date);
  }
  
  export function isTimeValid(time) {
    return Boolean(time);
  }
  
  export function isGuestsValid(guests) {
    const num = parseInt(guests, 10);
    return num >= 1 && num <= 10;
  }
  
  export function isOccasionValid(occasion) {
    return occasion === 'Birthday' || occasion === 'Anniversary';
  }
  