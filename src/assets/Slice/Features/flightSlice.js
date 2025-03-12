import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flightType: "One Way",
  segmentCount: 1,
  formData: {},
  fromSegmentLists: [
    {
      id: 802,
      code: "DAC",
      name: "Hazrat Shahjalal Intl Airport",
      cityCode: "DAC",
      cityName: "Dhaka",
      countryName: "BANGLADESH",
      countryCode: "BD",
      address: "Dhaka,BANGLADESH",
    },
    {
      id: 4402,
      code: "CXB",
      name: "Cox's Bazar Airport",
      cityCode: "CXB",
      cityName: "Cox's Bazar",
      countryName: "BANGLADESH",
      countryCode: "BD",
      address: "Cox's Bazar,BANGLADESH",
    },
  ],
  fromAirports: [
    {
      id: 1,
      code: "DAC",
      name: "Hazrat Shahjalal Intl Airport",
      cityName: "Dhaka",
      countryName: "Bangladesh",
    },
    {
      id: 2,
      code: "JFK",
      name: "John F. Kennedy Intl Airport",
      cityName: "New York",
      countryName: "USA",
    },
    {
      id: 3,
      code: "LHR",
      name: "Heathrow Airport",
      cityName: "London",
      countryName: "UK",
    },
    {
      id: 4,
      code: "DXB",
      name: "Dubai Intl Airport",
      cityName: "Dubai",
      countryName: "UAE",
    },
    {
      id: 5,
      code: "SIN",
      name: "Changi Airport",
      cityName: "Singapore",
      countryName: "Singapore",
    },
  ],
  toAirports: [
    {
      id: 6,
      code: "BKK",
      name: "Suvarnabhumi Intl Airport",
      cityName: "Bangkok",
      countryName: "Thailand",
    },
    {
      id: 7,
      code: "HKG",
      name: "Hong Kong Intl Airport",
      cityName: "Hong Kong",
      countryName: "Hong Kong",
    },
    {
      id: 8,
      code: "CDG",
      name: "Charles de Gaulle Airport",
      cityName: "Paris",
      countryName: "France",
    },
    {
      id: 9,
      code: "SYD",
      name: "Sydney Kingsford Smith Airport",
      cityName: "Sydney",
      countryName: "Australia",
    },
    {
      id: 10,
      code: "ORD",
      name: "O'Hare Intl Airport",
      cityName: "Chicago",
      countryName: "USA",
    },
  ],
  normalFromAirport: {
    code: "DAC",
    name: "Hazrat Shahjalal Intl Airport",
    cityName: "Dhaka",
    countryName: "Bangladesh",
  },
  normalToAirport: {
    code: "DXB",
    name: "Dubai Intl Airport",
    cityName: "Dubai",
    countryName: "UAE",
  },
  cabin: "Economy",
  regularSearch: false,
  advanceSearch: false,
  studentFare: false,
  umrahFare: false,
  seamanFare: false,
  isPassengerOpen: false,
  passengers: [
    { type: "ADT", count: 1, ages: [] },
    { type: "CNN", count: 0, ages: [] },
    { type: "INF", count: 0, ages: [] },
  ],
  departureDate: new Date(),
  returnDate: new Date(),
  openDeparture: false,
  openArrival: false,
  departureDates: [new Date(), new Date(), new Date(), new Date()],
  openDepartures: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setFlightType: (state, action) => {
      state.flightType = action.payload;
      if (action.payload !== "Multi City") {
        state.segmentCount = 1;
      }
    },
    addButton: (state) => {
      if (state.segmentCount < 4) {
        state.segmentCount += 1;
      }
    },
    removeButton: (state) => {
      if (state.segmentCount > 1) {
        state.segmentCount -= 1;
      }
    },
    setFromAirport: (state, action) => {
      const { index, airport } = action.payload;
      if (index !== undefined) {
        state.fromAirports = state.fromAirports.map((item, i) =>
          i === index ? airport : item
        );
      } else {
        state.normalFromAirport = airport;
      }
    },
    setToAirport: (state, action) => {
      const { index, airport } = action.payload;
      if (index !== undefined) {
        state.toAirports = state.toAirports.map((item, i) =>
          i === index ? airport : item
        );
      } else {
        state.normalToAirport = airport;
      }
    },
    setCabin: (state, action) => {
      state.cabin = action.payload;
    },
    toggleRegularSearch: (state) => {
      state.regularSearch = !state.regularSearch;
      if (state.regularSearch) state.advanceSearch = false;
    },
    toggleAdvanceSearch: (state) => {
      state.advanceSearch = !state.advanceSearch;
      if (state.advanceSearch) state.regularSearch = false;
    },
    selectStudentFare: (state) => {
      state.studentFare = !state.studentFare;
      if (state.studentFare) {
        state.umrahFare = false;
        state.seamanFare = false;
      }
    },
    selectUmrahFare: (state) => {
      state.umrahFare = !state.umrahFare;
      if (state.umrahFare) {
        state.studentFare = false;
        state.seamanFare = false;
      }
    },
    selectSeamanFare: (state) => {
      state.seamanFare = !state.seamanFare;
      if (state.seamanFare) {
        state.studentFare = false;
        state.umrahFare = false;
      }
    },
    togglePassenger: (state) => {
      state.isPassengerOpen = !state.isPassengerOpen;
    },
    incrementPassenger: (state, action) => {
      const { type } = action.payload;
      const passenger = state.passengers.find((p) => p.type === type);
      if (passenger) passenger.count += 1;
    },
    decrementPassenger: (state, action) => {
      const { type } = action.payload;
      const passenger = state.passengers.find((p) => p.type === type);
      if (passenger && passenger.count > 0) passenger.count -= 1;
    },
    setPassengerCount: (state, action) => {
      const { type, count } = action.payload;
      const passenger = state.passengers.find((p) => p.type === type);
      if (passenger) passenger.count = count;
    },
    setDepartureDate: (state, action) => {
      state.departureDate = action.payload;
    },
    setDepartureDates: (state, action) => {
      const { index, date } = action.payload;
      state.departureDates[index] = date;
    },
    setReturnDate: (state, action) => {
      state.returnDate = action.payload;
    },
    toggleDepartureCalendar: (state) => {
      state.openDeparture = !state.openDeparture;
      state.openArrival = false;
    },
    toggleArrivalCalendar: (state) => {
      state.openArrival = !state.openArrival;
      state.openDeparture = false;
    },
    toggleDepartureCalendars: (state, action) => {
      const index = action.payload;
      state.openDepartures[index] = !state.openDepartures[index];
    },
  },
});

export const {
  setFlightType,
  addButton,
  removeButton,
  setFromAirport,
  setToAirport,
  setCabin,
  toggleRegularSearch,
  toggleAdvanceSearch,
  selectStudentFare,
  selectUmrahFare,
  selectSeamanFare,
  togglePassenger,
  incrementPassenger,
  decrementPassenger,
  setPassengerCount,
  setDepartureDate,
  setReturnDate,
  toggleDepartureCalendar,
  toggleArrivalCalendar,
  toggleDepartureCalendars,
  setDepartureDates,
} = flightSlice.actions;
export default flightSlice.reducer;
