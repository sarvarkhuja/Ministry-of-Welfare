import { EntityModel } from 'src/app/core/models/entity.model';

export class EmployeeDataModel extends EntityModel {
  employeeNumber!: number;
  firstName!: string;
  lastName!: string;
  gender!: number;
  birthDate!: Date;
  age!: number;
  startDate!: Date;
  workDuration!: number;
  subFactory!: string;
  division!: string;
  department!: string;
  identityType!: string;
  identityCard!: string;
  city?: string;
  zip?: string;
  street?: string;
  phone?: string;
  mobilePhone?: string;
  familyStatus?: string;
  spouseFirstName?: string;
  spouseIdentityCard?: number;
  bank?: string;
  branch?: string;
  account?: number;
  employeeType!: number;
  getIdentityCard!: string;
}
