import { EntityModel } from '../../../../core/models/entity.model';
import { Grid } from '../../../../core/decorators/grid.decorator';
import { Display } from '../../../../core/decorators/display.decorator';

/**
 *
 */
@Grid('Obligations')
export class ObligationsModel extends EntityModel {
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
    caption: 'התחייבות',
    captionInEnglish: 'Obligation',
    dataType: 'string',
  })
  proficiency!: number;

  /**
   *
   */
  @Display({
    caption: 'התחייבויות',
    captionInEnglish: 'Obligation description',
    dataType: 'string',
  })
  liabilityDescription!: string;

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
    caption: 'שנה',
    captionInEnglish: 'Obligation year',
    dataType: 'string',
  })
  commitmentYear!: number;

  /**
   *
   */
  @Display({
    caption: 'שעות',
    captionInEnglish: 'Hours',
    dataType: 'string',
  })
  commitmentHour!: number;

  /**
   *
   */
  @Display({
    caption: 'הערה',
    captionInEnglish: 'Comment',
    dataType: 'string',
  })
  description!: string;

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
