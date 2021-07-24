import { AddUpdateEmployeeModel } from './add-update-employee.model';

export class AddEmployeeModel extends AddUpdateEmployeeModel {
  department?: number;
  jobsPercent?: number;
  jobsConnection!: string;
}
