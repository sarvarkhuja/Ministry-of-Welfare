import { Grid } from 'src/app/core/decorators/grid.decorator';
import { EntityModel } from 'src/app/core/models/entity.model';

/**
 *
 */
@Grid('GetEmployeeJob')
export class GetEmployeeJob extends EntityModel {
  activityCode!: string;
  district!: number;
  districtDescription!: string;
  jobNumber!: number;
  jobPercent!: number;
  department!: number;
  departmentDescription!: string;
  professionType!: number;
  professionTypeDescription!: string;
  professionTypeDate!: Date;
  from!: Date;
  until?: any;
  wagesFunding!: number;
  wagesFundingDescription!: string;
  budgetNumber!: number;
  budgetNumberDescription!: string;
  specialAgreement!: number;
  specialAgreementDescription!: string;
  normType!: number;
  normTypeDescription!: string;
  normGroup!: number;
  normGroupDescription?: any;
  rank!: number;
  rankDescription!: string;
  subRank!: number;
  subRankDescription!: string;
  subRankDate!: Date;
  seniorityYears!: number;
  personalRank?: any;
  additionType!: number;
  additionTypeDescription?: any;
  councilType!: number;
  councilTypeDescription!: string;
  priorityRegion!: number;
  geoRegion!: number;
  geoRegionDescription?: any;
  payrollDate!: Date;
}
