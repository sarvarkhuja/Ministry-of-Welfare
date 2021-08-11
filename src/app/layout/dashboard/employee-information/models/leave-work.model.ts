import { EntityModel } from '../../../../core/models/entity.model';
import { Grid } from '../../../../core/decorators/grid.decorator';
import { Display } from '../../../../core/decorators/display.decorator';

/**
 *
 */
@Grid('LeaveWorkGrid')
export class LeaveWorkModel extends EntityModel {
  /**
   *
   */
  @Display({
    caption: 'פעיל',
    captionInEnglish: 'Active',
    dataType: 'string',
  })
  activityCode!: string;

  /**
   *
   */
  @Display({
    caption: 'סיבת עזיבה',
    captionInEnglish: 'Leave Reason',
    dataType: 'string',
  })
  reasonDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'מתאריך',
    captionInEnglish: 'Date from',
    dataType: 'date',
  })
  fromDate!: Date;

  /**
   *
   */
  @Display({
    caption: 'עד תאריך',
    captionInEnglish: 'Date until',
    dataType: 'date',
  })
  untilDate!: Date;

  /**
   *
   */
  @Display({
    caption: 'תאריך נוסף',
    captionInEnglish: 'Additional date',
    dataType: 'date',
  })
  payrollDate!: Date;
}
