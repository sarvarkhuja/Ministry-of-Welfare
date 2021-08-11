import { Grid } from 'src/app/core/decorators/grid.decorator';
import { EntityModel } from 'src/app/core/models/entity.model';
import { Display } from '../../../../core/decorators/display.decorator';

/**
 *
 */
@Grid('GetEmployeeJob')
export class GetEmployeeJob extends EntityModel {
  /**
   *
   */
  @Display({
    caption: 'קוד פעילות',
    captionInEnglish: 'Active',
    dataType: 'string',
  })
  activityCode?: string;

  /**
   *
   */
  @Display({
    caption: 'מחוז',
    captionInEnglish: 'District',
    dataType: 'string',
  })
  districtDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'משרה',
    captionInEnglish: 'Job Number',
    dataType: 'string',
  })
  jobNumber?: number;

  /**
   *
   */
  @Display({
    caption: 'אחוז משרה',
    captionInEnglish: 'Job Percent',
    dataType: 'string',
  })
  jobPercent?: number;

  /**
   *
   */
  @Display({
    caption: 'מחלקה',
    captionInEnglish: 'Department',
    dataType: 'string',
  })
  departmentDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'סווג מקצועי',
    captionInEnglish: 'Profession Type',
    dataType: 'string',
  })
  professionTypeDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'תאריך סווג מקצועי',
    captionInEnglish: 'Profession Type Date',
    dataType: 'date',
  })
  professionTypeDate?: Date;

  /**
   *
   */
  @Display({
    caption: 'מתאריך',
    captionInEnglish: 'Date from',
    dataType: 'date',
  })
  fromDate?: Date;

  /**
   *
   */
  @Display({
    caption: 'עד תאריך',
    captionInEnglish: 'Date until',
    dataType: 'date',
  })
  untilDate?: Date;

  /**
   *
   */
  @Display({
    caption: 'מימון שכר',
    captionInEnglish: 'Wages Funding',
    dataType: 'string',
  })
  wagesFundingDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'סעיף תקציבי',
    captionInEnglish: 'Budget Number',
    dataType: 'string',
  })
  budgetNumberDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'הסכם מיוחד',
    captionInEnglish: 'Special Agreement',
    dataType: 'string',
  })
  specialAgreementDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'סוג תקן',
    captionInEnglish: 'Standart Type',
    dataType: 'string',
  })
  normTypeDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'סוג תקן',
    captionInEnglish: 'Standard Group',
    dataType: 'string',
  })
  normGroupDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'דרוג',
    captionInEnglish: 'Rank',
    dataType: 'string',
  })
  rankDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'דרגה',
    captionInEnglish: 'Sub Rank',
    dataType: 'string',
  })
  subRankDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'תאריך דרגה',
    captionInEnglish: 'Sub Rank Date',
    dataType: 'date',
  })
  subRankDate?: Date;

  /**
   *
   */
  @Display({
    caption: 'שנות וותק',
    captionInEnglish: 'Seniority Years',
    dataType: 'string',
  })
  seniorityYears?: number;

  /**
   *
   */
  @Display({
    caption: 'דרגה אישית',
    captionInEnglish: 'Personal Rank',
    dataType: 'string',
  })
  personalRank?: string;

  /**
   *
   */
  @Display({
    caption: 'סוג תוספת',
    captionInEnglish: 'Addition Type',
    dataType: 'string',
  })
  additionTypeDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'סוג רשות',
    captionInEnglish: 'Council Type',
    dataType: 'string',
  })
  councilTypeDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'אזור עדיפות',
    captionInEnglish: 'Priority Region',
    dataType: 'string',
  })
  priorityRegion?: number;

  /**
   *
   */
  @Display({
    caption: 'אזור גאוגרפי',
    captionInEnglish: 'Geo Region',
    dataType: 'string',
  })
  geoRegionDescription?: string;

  /**
   *
   */
  @Display({
    caption: 'תאריך נוסף',
    captionInEnglish: 'Additional date',
    dataType: 'date',
  })
  payrollDate?: Date;
}
