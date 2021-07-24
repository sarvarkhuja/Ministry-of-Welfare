import { EntityModel } from '../../../../core/models/entity.model';
import { Grid } from '../../../../core/decorators/grid.decorator';
import { Display } from '../../../../core/decorators/display.decorator';

/**
 *
 */
@Grid('EmployeeListGrid')
export class EmployeeModel extends EntityModel {
  /**
   *
   */
  @Display({
    allowSearch: true,
    caption: 'מספר זהות',
    captionInEnglish: 'National Id',
    dataType: 'string'
  })
  nationalId!: string;

  /**
   *
   */
  @Display({
    allowSearch: true,
    caption: 'שם פרטי',
    captionInEnglish: 'First Name',
    dataType: 'string'
  })
  firstName!: string;

  /**
   *
   */
  @Display({
    allowSearch: true,
    caption: 'שם משפחה',
    captionInEnglish: 'Last Name',
    dataType: 'string'
  })
  lastName!: string;

  /**
   *
   */
  @Display({
    caption: 'מספר מחוז',
    captionInEnglish: 'District',
    dataType: 'string'
  })
  district!: number;

  /**
   *
   */
  @Display({
    caption: 'שם המחוז',
    captionInEnglish: 'District Description',
    dataType: 'string'
  })
  districtDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'מחלקה',
    captionInEnglish: 'Department',
    dataType: 'string'
  })
  department!: number;

  /**
   *
   */
  @Display({
    caption: 'תאור מחלקה',
    captionInEnglish: 'Department Description',
    dataType: 'string'
  })
  departmentDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'תאריך לידה',
    captionInEnglish: 'Birthdate',
    dataType: 'date',
    format: 'dd/MM/yyyy',
  })
  birthDate!: Date;

  /**
   *
   */
  @Display({
    caption: 'מין',
    captionInEnglish: 'Sex',
    dataType: 'string'
  })
  sex!: string;

  /**
   *
   */
  @Display({
    caption: 'ת.ל ילד אחרון',
    captionInEnglish: 'Youngest Child Birthdate',
    dataType: 'date',
    format: 'dd/MM/yyyy',
  })
  youngestChildBirthDate!: Date;

  /**
   *
   */
  @Display({
    caption: 'קוד סטטוס',
    captionInEnglish: 'Employee Status',
    dataType: 'string'
  })
  employeeStatus!: number;

  /**
   *
   */
  @Display({
    caption: 'תאור סטטוס',
    captionInEnglish: 'Employee Status Description',
    dataType: 'string'
  })
  employeeStatusDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'ותק מקצועי',
    captionInEnglish: 'Professional Seniority',
    dataType: 'date',
    format: 'dd/MM/yyyy',
  })
  professionalSeniority!: Date;

  /**
   *
   */
  @Display({
    caption: 'קוד ה.סוציאלית',
    captionInEnglish: 'Social Training',
    dataType: 'string'
  })
  socialTraining!: number;

  /**
   *
   */
  @Display({
    caption: 'הכשרה סוציאלית',
    captionInEnglish: 'Social Training',
    dataType: 'string'
  })
  socialTrainingDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'קוד תואר',
    captionInEnglish: 'Degree',
    dataType: 'string'
  })
  degree!: number;

  /**
   *
   */
  @Display({
    caption: 'תואר אקדמי',
    captionInEnglish: 'Degree Description',
    dataType: 'string'
  })
  degreeDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'קוד השכלה',
    captionInEnglish: 'Education',
    dataType: 'string'
  })
  education!: number;

  /**
   *
   */
  @Display({
    caption: 'השכלה',
    captionInEnglish: 'Education Description',
    dataType: 'string'
  })
  educationDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'שנות לימוד',
    captionInEnglish: 'Education Years',
    dataType: 'string'
  })
  educationYears!: number;

  /**
   *
   */
  @Display({
    caption: 'תחילת עבודה',
    captionInEnglish: 'Start Date',
    dataType: 'date',
    format: 'dd/MM/yyyy',
  })
  startDate!: Date;

  /**
   *
   */
  @Display({
    caption: 'סיום עבודה',
    captionInEnglish: 'End Date',
    dataType: 'date',
    format: 'dd/MM/yyyy',
  })
  endDate!: Date;

  /**
   *
   */
  @Display({
    caption: 'קוד עזיבה',
    captionInEnglish: 'Leave Reason',
    dataType: 'string'
  })
  leaveReason!: number;

  /**
   *
   */
  @Display({
    caption: 'סיבת עזיבה',
    captionInEnglish: 'Leave Reason Description',
    dataType: 'string'
  })
  leaveReasonDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'Rank',
    captionInEnglish: 'Rank',
    dataType: 'string'
  })
  rank!: number;

  /**
   *
   */
  @Display({
    caption: 'דרגה אישית',
    captionInEnglish: 'Rank Description',
    dataType: 'string'
  })
  rankDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'Obligation',
    captionInEnglish: 'Obligation',
    dataType: 'string'
  })
  obligation!: number;

  /**
   *
   */
  @Display({
    caption: 'Obligation Description',
    captionInEnglish: 'Obligation Description',
    dataType: 'string'
  })
  obligationDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'שכר מוגדל',
    captionInEnglish: 'Increased Wages',
    dataType: 'string'
  })
  increasedWages!: string;

  /**
   *
   */
  @Display({
    caption: 'Proficiency Reward',
    captionInEnglish: 'Proficiency Reward',
    dataType: 'string'
  })
  proficiencyReward!: number;

  /**
   *
   */
  @Display({
    caption: 'גמול השתלמות',
    captionInEnglish: 'Proficiency Reward Description',
    dataType: 'string'
  })
  proficiencyRewardDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'גמול תעודה',
    captionInEnglish: 'Diploma Reward',
    dataType: 'string'
  })
  diplomaReward!: string;

  /**
   *
   */
  @Display({
    caption: 'דרגה אישית',
    captionInEnglish: 'Personal Rank',
    dataType: 'string'
  })
  personalRank!: string;

  /**
   *
   */
  @Display({
    caption: 'קוד קורס כללי',
    captionInEnglish: 'General Course',
    dataType: 'string'
  })
  generalCourse!: number;

  /**
   *
   */
  @Display({
    caption: 'קורס כללי',
    captionInEnglish: 'General Course Description',
    dataType: 'string'
  })
  generalCourseDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'השת. עו"ז',
    captionInEnglish: 'General Training',
    dataType: 'string'
  })
  generalTraining!: number;

  /**
   *
   */
  @Display({
    caption: 'השתלמות עו"ז',
    captionInEnglish: 'General Training Description',
    dataType: 'string'
  })
  generalTrainingDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'קורס עו"ז',
    captionInEnglish: 'Course Cycle',
    dataType: 'string'
  })
  courseCycle!: number;

  /**
   *
   */
  @Display({
    caption: 'מחזור קורס עו"ז',
    captionInEnglish: 'Course Cycle Description',
    dataType: 'string'
  })
  courseCycleDescription!: string;

  /**
   * TODO: Change title to Hebrew
   */
  @Display({
    caption: 'Training Cycle',
    captionInEnglish: 'Training Cycle',
    dataType: 'string'
  })
  trainingCycle!: number;

  /**
   * TODO: Change title to Hebrew
   */
  @Display({
    caption: 'Training Cycle Description',
    captionInEnglish: 'Training Cycle Description',
    dataType: 'string'
  })
  trainingCycleDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'קוד תוספות',
    captionInEnglish: 'Wages Additions',
    dataType: 'string'
  })
  wagesAdditions!: number;

  /**
   *
   */
  @Display({
    caption: 'תוספות',
    captionInEnglish: 'Wages Additions Description',
    dataType: 'string'
  })
  wagesAdditionsDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'אחוז מסגרת',
    captionInEnglish: 'Frame Percent',
    dataType: 'string'
  })
  framePercent!: number;

  /**
   *
   */
  @Display({
    caption: 'אחוז משרות',
    captionInEnglish: 'Jobs Percent',
    dataType: 'string'
  })
  jobsPercent!: number;

  /**
   *
   */
  @Display({
    caption: 'תאריך מומחיות',
    captionInEnglish: 'Expert Date',
    dataType: 'date',
    format: 'dd/MM/yyyy',
  })
  expertDate!: Date;

  /**
   *
   */
  @Display({
    caption: 'עובד חדש',
    captionInEnglish: 'New Employee',
    dataType: 'string'
  })
  newEmployee!: string;

  /**
   *
   */
  @Display({
    caption: 'שגיאה',
    captionInEnglish: 'Error',
    dataType: 'string'
  })
  error!: string;

  /**
   *
   */
  @Display({
    caption: 'קוד שגיאה',
    captionInEnglish: 'Error Code',
    dataType: 'string'
  })
  errorCode!: number;

  /**
   *
   */
  @Display({
    caption: 'Error Description',
    captionInEnglish: 'Error Description',
    dataType: 'string'
  })
  errorDescription!: string;

  /**
   *
   */
  @Display({
    caption: 'קשר למשרות',
    captionInEnglish: 'Job',
    dataType: 'string'
  })
  job!: number;

  /**
   *
   */
  @Display({
    caption: 'תחילת תפקיד',
    captionInEnglish: 'Job From Date',
    dataType: 'date',
    format: 'dd/MM/yyyy',
  })
  jobFromDate!: Date;

  /**
   *
   */
  @Display({
    caption: 'סיום תפקיד',
    captionInEnglish: 'Job Until Date',
    dataType: 'date',
    format: 'dd/MM/yyyy',
  })
  jobUntilDate!: string;

  /**
   *
   */
  @Display({
    caption: 'אזהרה 1',
    captionInEnglish: 'Warning',
    dataType: 'string'
  })
  warning!: string;
}
