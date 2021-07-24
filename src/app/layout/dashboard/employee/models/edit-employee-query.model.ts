export class EditEmployeeQueryModel {
  employeeNumber!: number;
  firstName!: string;
  lastName!: string;
  birthDate!: Date;
  gender!: number;
  startDate!: Date;
  identityType!: number;
  city!: number;
  street!: string;
  zip!: string;
  phone!: string;
  mobile!: string;
  spouseName!: string;
  spouseIdentityCard!: number;
  maritalStatus!: number;
  employeeType!: string;
  bank?: number;
  branch?: number;
  account?: number;
  division!: number;
  subFactory!: string;
  department!: number;
}
