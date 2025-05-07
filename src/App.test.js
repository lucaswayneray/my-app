import { initializeTimes, updateTimes } from './bookingUtils';


test('initializeTimes returns correct times', () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test('updateTimes returns the same times on action', () => {
  const initialState = ["17:00", "18:00", "19:00"];
  const action = { type: "update_times", payload: "2023-05-01" };
  const updatedState = updateTimes(initialState, action);
  expect(updatedState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});
