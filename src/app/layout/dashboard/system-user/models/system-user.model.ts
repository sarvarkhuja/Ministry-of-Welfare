import { EntityModel } from './../../../../core/models/entity.model';
import { Display } from './../../../../core/decorators/display.decorator';
import { Grid } from 'src/app/core/decorators/grid.decorator';

@Grid('SystemUserGrid')
export class SystemUser extends EntityModel {
  @Display({
    caption: 'User name',
    dataType: 'text'
  })
  userName!: string;

  @Display({
    caption: 'Last name',
    dataType: 'text',
    width: 100
  })
  lastName!: string;

  @Display({
    caption: 'First name',
    dataType: 'text'
  })
  firstName!: string;

  @Display({
    caption: 'System type',
    dataType: 'text'
  })
  systemType!: string;

  @Display({
    caption: 'Permissions',
    dataType: 'text'
  })
  permissions!: string;

  @Display({
    caption: 'Main district',
    dataType: 'text'
  })
  mainDistrict!: string;

  @Display({
    caption: 'Role',
    dataType: 'text'
  })
  role!: string;

  @Display({
    caption: 'Modules',
    dataType: 'text'
  })
  modules!: string;
}
