import { initializeTimes, updateTimes } from './bookingUtils';
import * as api from './api';  // Import EVERYTHING from './api'

// Tell Jest: Mock the fetchAPI dynamically
jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  test('should return non-empty array of times', () => {
    // Tell the mock what to return
    api.fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);
    
    const times = initializeTimes();
    expect(times.length).toBeGreaterThan(0);
    expect(times).toContain("17:00");
  });
});

describe('updateTimes', () => {
  test('should update available times based on date', () => {
    // Tell the mock what to return
    api.fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);
    
    const initialState = ["17:00", "18:00"];
    const action = { type: "update_times", payload: "2025-05-01" };
    const updatedState = updateTimes(initialState, action);
    expect(updatedState).toContain("17:00");
    expect(updatedState.length).toBeGreaterThan(0);
  });
});
