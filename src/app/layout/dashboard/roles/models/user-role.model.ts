import { ActionType } from './action-type.enum';
import { EntityModel } from '../../../../core/models/entity.model';
import { Grid } from '../../../../core/decorators/grid.decorator';

@Grid('UserRolesGrid')
export class UserRoleModel extends EntityModel {
  roleId!: number;
  districtId!: number;
  actionType!: ActionType;
  entryCode!: string;
  entryType!: number;
}
