const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2],
    interviewers: [1, 2],
    spots: 0,
  },
];

const appointments = {
  1: {
    id: 1,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "1pm",
    interview: null,
  },
  3: {
    id: 3,
    time: "2pm",
    interview: null,
  },
};

const interviewers = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};

const state = {
  day: "Monday",
  days,
  appointments,
  interviewers,
};

// Update spots remaining!
// Creation / Deletion of appt
// Edit?

// bookInterview
// cancelInterview

// Incrementing spots, not a good idea
// Fetch the data from API, not a good idea (million problem)

// What does it mean to have a free spot?

// value at the interview key of an appointment object is null
// COUNT THE NULLS! (belonging to a specific day)

// Find the appointments for a given day

const countSpots = () => {
  const currentDay = state.days.find((day) => day.name === state.day);
  const apptIds = currentDay.appointments;

  const apptList = apptIds.map((id) => state.appointments[id]);
  const freeApts = apptId.filter((id) => state.appointments[id].interview === null);
  const amountFreeApts = freeApts.length;

  return amountFreeApts;
};

// Spread state ???
// Spread days
// Spread currentDay

const updateSpots = () => {
  const currentDay = state.days.find((day) => day.name === state.day);
  const currentDayIndex = state.days.findIndex((day) => day.name === state.day);

  // Update the day
  const updatedDay = { ...currentDay, spots: countSpots() };

  // Update the days array
  const updatedDays = [...state.days];
  updatedDays[currentDayIndex] = updatedDay;

  // Update the state
  const updatedState = { ...state, days: updatedDays };

  return updatedState;
};
