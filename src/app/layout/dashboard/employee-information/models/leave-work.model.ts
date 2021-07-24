import { Grid } from 'src/app/core/decorators/grid.decorator';
import { EntityModel } from 'src/app/core/models/entity.model';

/**
 *
 */
@Grid('LeaveWorkGrid')
export class LeaveWorkModel extends EntityModel {
  activityCode?: string;
  reason!: string;
  from?: Date;
  until?: Date;
  comment?: string;
  payrollDate?: Date;
}
