export enum Tabs {
  PERSONAL_DETAILS = 'personal-details',
  WORKPLACES = 'workplaces',
  JOBS = 'jobs',
  ROLES = 'roles',
  LEAVE_WORK = 'leave-work',
  OBLIGATIONS = 'obligations',
  PROFICIENCY_REWARDS = 'proficiency-rewards',
  GENERAL_COURSES = 'general-courses',
  COURSE_CYCLES = 'course-cycles',
  PERSONAL_PAYMENT = 'personal-payment',
}

export class TabNavigationHelper {
  /**
   * Gets employee tabs list to be displayed in the drawer
   * @returns navigation list
   */
  public static getNavigationTabs(isDisabled = false): any[] {
    return [
      {
        id: 1,
        text: 'פרטי עובד אישיים',
        englishText: 'Personal Details',
        filePath: Tabs.PERSONAL_DETAILS,
      },
      { id: 2, text: 'מקומות עבודה', englishText: 'Workplaces', filePath: Tabs.WORKPLACES, disabled: isDisabled },
      { id: 3, text: 'משרות', englishText: 'Jobs', filePath: Tabs.JOBS, disabled: isDisabled },
      { id: 4, text: 'תפקידים נוספים', englishText: 'Roles', filePath: Tabs.ROLES, disabled: isDisabled },
      {
        id: 5,
        text: 'היסטורית סיום עבודה',
        englishText: 'Leave Work',
        filePath: Tabs.LEAVE_WORK,
        disabled: isDisabled,
      },
      {
        id: 6,
        text: 'התחייבויות העובד',
        englishText: 'Employee Obligation',
        filePath: Tabs.OBLIGATIONS,
        disabled: isDisabled,
      },
      {
        id: 7,
        text: 'גמולי השתלמות',
        englishText: 'Proficiency Rewards',
        filePath: Tabs.PROFICIENCY_REWARDS,
        disabled: isDisabled,
      },
      {
        id: 8,
        text: 'קורסים כלליים',
        englishText: 'General Courses & Trainings',
        filePath: Tabs.GENERAL_COURSES,
        disabled: isDisabled,
      },
      { id: 9, text: 'קורס עו"ז', englishText: 'Oz Courses', filePath: Tabs.COURSE_CYCLES, disabled: isDisabled },
      {
        id: 10,
        text: 'תשלומים',
        englishText: 'Personal Payment',
        filePath: Tabs.PERSONAL_PAYMENT,
        disabled: isDisabled,
      },
    ];
  }
}
