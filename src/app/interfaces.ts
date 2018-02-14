
export class ShiftTimes {
  public startTime: string;
  public breakTime1: string;
  public mealTime: string;
  public breakTime2: string;
  public endTime: string;
  public startOnTime: boolean;
  public endOnTime: boolean;
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

export class ScheduleNew  {
  public date:string;
  public day:string;
  public shiftIn :string;
  public shiftOut:string;
  public month: string;
  public calDay: number;
  public isOptedLOA: boolean;
  public isWeeklyOff: boolean;
}