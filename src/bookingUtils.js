/* global fetchAPI */

/**
 * Initializes the available booking times for today's date.
 * @returns {Array} An array of available booking times.
 */
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today) || [];
}

/**
 * Updates available booking times based on a selected date.
 * @param {Array} state - Current available times.
 * @param {Object} action - Action containing the selected date payload.
 * @returns {Array} Updated array of available booking times.
 */
export function updateTimes(state, action) {
  if (action.type === "update_times") {
    return fetchAPI(new Date(action.payload)) || [];
  }
  return state;
}
