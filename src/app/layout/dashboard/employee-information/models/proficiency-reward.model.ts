import { EntityModel } from '../../../../core/models/entity.model';
import { Grid } from '../../../../core/decorators/grid.decorator';
import { Display } from '../../../../core/decorators/display.decorator';

/**
 *
 */
@Grid('ProficiencyReward')
export class ProficiencyRewardModel extends EntityModel {
  /**
   *
   */
  @Display({
    caption: 'גמול השתלמות',
    captionInEnglish: 'Proficiency Reward',
    dataType: 'string',
  })
  proficiencyDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'מתאריך',
    captionInEnglish: 'Date from',
    dataType: 'date',
  })
  from!: Date;

  /**
   *
   */
  @Display({
    caption: 'עד תאריך',
    captionInEnglish: 'Date until',
    dataType: 'date',
  })
  until!: Date;

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
    captionInEnglish: 'Additional Date',
    dataType: 'date',
  })
  payrollDate!: Date;
}
