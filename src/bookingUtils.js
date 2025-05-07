// bookingUtils.js

export function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  
  export function updateTimes(state, action) {
    if (action.type === "update_times") {
      return initializeTimes();
    }
    return state;
  }
  