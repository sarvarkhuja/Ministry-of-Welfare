/**
 * Readonly URL properties store
 */
export class EndpointSettings {
  // Sign in
  public static readonly SIGN_IN = 'identity/Users/SignIn';
  public static readonly PRE_LOGIN_VALIDATE = 'identity/Users/Validate';

  // User Roles
  public static readonly BROWSE_PERMISSIONS = 'administration/security/browsePermissions';
  public static readonly GET_ROLES = 'administration/security/getRoles';
  public static readonly GET_DISTRICTS = 'administration/security/getDistricts';
  public static readonly GET_DISTRICTS_BY_ROLE = 'administration/security/getDistrictsByRole';
  public static readonly GET_DEPARTMENTS = 'administration/security/getDepartments';
  public static readonly UPDATE_PERMISSIONS = 'administration/security/updatePermissions';
  public static readonly UPDATE_DISTRICTS = 'administration/security/updateDistricts';
  public static readonly UPDATE_DEPARTMENTS = 'administration/security/updateDepartments';

  // Employees Screen
  public static readonly GET_EMPLOYEES_LIST = 'employee/employees/getAll';
  public static readonly GET_EMPLOYEES_ENTITIES_LIST = 'employee/employees/getAllEntities';
  public static readonly ADD_EMPLOYEE = 'employee/employees/add';
  public static readonly GET_SEARCH_JOB = 'employee/Employees/SearchJobsByMatchingJobNumber';

  // Employee Lookups
  public static readonly GET_EMPLOYEE_DEPARTMENTS = 'employeeLookups/employeeLookups/getAllDepartments';
  public static readonly GET_EMPLOYEE_STATUSES = 'employeeLookups/employeeLookups/getAllEmployeeStatuses';
  public static readonly GET_SOCIAL_TRAININGS = 'employeeLookups/employeeLookups/getAllSocialTrainings';
  public static readonly GET_EDUCATION_DEGREES = 'employeeLookups/employeeLookups/getAllEducationDegrees';
  public static readonly GET_EDUCATION_LEVELS = 'employeeLookups/employeeLookups/getAllEducationLevels';
  public static readonly GET_LEAVE_REASONS = 'employeeLookups/employeeLookups/getAllLeaveReasons';
  public static readonly GET_COMMITMENTS = 'employeeLookups/employeeLookups/getAllCommitments';
  public static readonly GET_PROFICIENCY_REWARDS = 'employeeLookups/employeeLookups/getAllProficiencyRewards';
  public static readonly GET_GENERAL_COURSES = 'employeeLookups/employeeLookups/getAllGeneralCourses';
  public static readonly GET_GENERAL_TRAININGS = 'employeeLookups/employeeLookups/getAllGeneralTrainings';
  public static readonly GET_COURSE_CYCLES = 'employeeLookups/employeeLookups/getAllCourseCycles';
  public static readonly GET_TRAINING_CYCLES = 'employeeLookups/employeeLookups/getAllTrainingCycles';
  public static readonly GET_WAGES_ADDITIONS = 'employeeLookups/employeeLookups/getAllWagesAdditions';

  // Employee Templates
  public static readonly GET_TEMPLATE_PARTS = 'templates/templates/getTemplates';
  public static readonly GET_TEMPLATE_COLUMNS = 'templates/templates/getTemplateColumns';
  public static readonly SAVE_TEMPLATE_COLUMNS = 'templates/templates/saveTemplate';
  public static readonly GET_PROFILES = 'administration/security/getProfiles';
  public static readonly DELETE_TEMPLATE_COLUMNS = 'templates/templates/deleteTemplate';

  // Update employee information
  public static readonly GET_EMPLOYEE_ROLES = 'employeeTabs/employeeTabs/getEmployeeRoles';
  public static readonly GET_PERSONAL_DETAILS = 'employeeTabs/employeeTabs/getEmployeePersonalDetails';
  public static readonly GET_WORKPLACES = 'employeeTabs/EmployeeTabs/GetEmployeeWorkPlaces';
  public static readonly UPDATE_PERSONAL_DETAILS = 'employee/Employees/Update';
  public static readonly UPDATE_WORKPLACES = 'employeeTabs/EmployeeTabs/UpdateWorkPlaces';
  public static readonly GET_EMPLOYEE_LEAVE_REASONS = 'employeeTabs/employeeTabs/getEmployeeLeaveReasons';
  public static readonly UPDATE_EMPLOYEE_ROLES = 'employeeTabs/EmployeeTabs/UpdateEmployeeRoles';

  // General tables
  public static readonly GET_GENERAL_TABLES = 'generaltables/GeneralTables/GetTables';
  public static readonly GET_GENERAL_TABLE_ENTRIES = 'generaltables/GeneralTables/GetTableEntries';
  public static readonly UPDATE_GENERAL_TABLE_ENTRY = 'generaltables/GeneralTables/UpdateTableEntry';
  public static readonly ADD_GENERAL_TABLE_ENTRY = 'generaltables/GeneralTables/AddTableEntry';

  // Jobs tab
  public static readonly GET_EMPLOYEE_JOBS = 'employeeTabs/EmployeeTabs/GetEmployeeJobs';
  public static readonly UPDATE_EMPLOYEE_JOBS = 'employeeTabs/EmployeeTabs/UpdateEmployeeJobs';
  public static readonly DELETE_EMPLOYEE_JOBS = 'employeeTabs​/EmployeeTabs​/DeleteEmployeeJobs';
  public static readonly ADD_EMPLOYEE_JOBS = 'employeeTabs/EmployeeTabs/AddEmployeeJobs';
}
