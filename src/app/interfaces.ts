export interface ShiftTimes {
  startTime: string;
  endTime: string;
  breakTime: string;
  mealTime: string;
}

export interface Associate {
  fName: string;
  lName: string;
  dob: string;
  maritalStatus: string;
  addr1: string;
  addr2: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
}

export interface Schedule {
  scheduleDay: number;
  scheduleMonth: string;
  shiftTimes: ShiftTimes;
}