import { EntityModel } from '../../../../core/models/entity.model';
import { Grid } from '../../../../core/decorators/grid.decorator';
import { Display } from '../../../../core/decorators/display.decorator';

/**
 *
 */
@Grid('LeaveWorkGrid')
export class PersonalPaymentModel extends EntityModel {
  /**
   *
   */
  @Display({
    caption: 'רכיב תשלום',
    captionInEnglish: 'Payment Symbol',
    dataType: 'string',
  })
  componentDescription!: string;

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
    caption: 'סכום',
    captionInEnglish: 'Amount',
    dataType: 'string',
  })
  amount!: number;

  /**
   *
   */
  @Display({
    caption: 'אחוז',
    captionInEnglish: 'Percent',
    dataType: 'string',
  })
  percent!: number;

  /**
   *
   */
  @Display({
    caption: 'שעות',
    captionInEnglish: 'Hours',
    dataType: 'string',
  })
  hours!: number;

  /**
   *
   */
  @Display({
    caption: 'תעריף',
    captionInEnglish: 'Rate',
    dataType: 'string',
  })
  rate!: number;

  /**
   *
   */
  @Display({
    caption: 'מספר משרה',
    captionInEnglish: 'Job Number',
    dataType: 'string',
  })
  jobNumber!: number;

  /**
   *
   */
  @Display({
    caption: 'סעיף תקציבי',
    captionInEnglish: 'Budget Number',
    dataType: 'string',
  })
  budgetItem!: number;

  /**
   *
   */
  @Display({
    caption: 'זכות/חובה',
    captionInEnglish: 'CreditDebit',
    dataType: 'string',
  })
  creditDebitCode!: string;

  /**
   *
   */
  @Display({
    caption: 'סוג תשלום',
    captionInEnglish: 'Payment Type',
    dataType: 'string',
  })
  paymentTypeDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'הערות',
    captionInEnglish: 'Comments',
    dataType: 'string',
  })
  remarks!: string;
}
