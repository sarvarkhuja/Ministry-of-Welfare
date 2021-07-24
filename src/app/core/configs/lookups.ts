/**
 *
 */
export interface LookupOptions {
  id: number;
  name: string;
  cacheName: string;
  mode: CacheType;
  dependent: boolean;
  title: string;
  otherXML?: string;
}

/**
 *
 */
export type CacheType = 'cache' | 'server';

/**
 *
 */
export class LookupNames {
  public static readonly AbsenceForUserUpdate: LookupOptions = {
    id: 35,
    name: 'AbsenceForUserUpdate',
    cacheName: 'AbsenceForUserUpdate',
    mode: 'cache',
    dependent: false,
    title: '1108', // Absence
  };

  public static readonly SubFactories: LookupOptions = {
    id: 1,
    name: 'TatMifalList',
    cacheName: 'TatMifalList',
    mode: 'server',
    dependent: false,
    title: '5759', // Sub-Factory
  };

  public static readonly Departments: LookupOptions = {
    id: 2,
    name: 'OrgDept',
    cacheName: 'OrgDept',
    mode: 'server',
    dependent: false,
    title: '1', // Department,
  };

  public static readonly Divisions: LookupOptions = {
    id: 3,
    name: 'AgafList',
    cacheName: 'AgafList',
    mode: 'server',
    dependent: false,
    title: '1305', // Division
  };

  public static readonly Cities: LookupOptions = {
    id: 4,
    name: 'SemelCityList',
    cacheName: 'SemelCityList',
    mode: 'server',
    dependent: false,
    title: '2208', // City
  };

  public static readonly Banks: LookupOptions = {
    id: 5,
    name: 'BLBankList',
    cacheName: 'BLBankList',
    mode: 'server',
    dependent: false,
    title: '5101', // Bank
  };

  public static readonly Branches: LookupOptions = {
    id: 6,
    name: 'BLSnifList',
    cacheName: 'BLSnifList',
    mode: 'server',
    dependent: false,
    title: '5102', // Branch
    otherXML: '<Root><Bank>{0}</Bank></Root>',
  };

  public static readonly IdentityTypes: LookupOptions = {
    id: 7,
    name: 'IDTypeList',
    cacheName: 'IDTypeList',
    mode: 'server',
    dependent: false,
    title: '5758', // Identity Type
  };

  public static readonly EmployeeTypes: LookupOptions = {
    id: 8,
    name: 'EmpTypeList',
    cacheName: 'EmpTypeList',
    mode: 'server',
    dependent: false,
    title: '5682', // Employee Type
  };

  public static readonly FamilyStatuses: LookupOptions = {
    id: 9,
    name: 'FamilyStList',
    cacheName: 'FamilyStList',
    mode: 'server',
    dependent: false,
    title: '2438', // Marital Status
  };

  public static readonly UserNames: LookupOptions = {
    id: 10,
    name: 'UserNameList',
    cacheName: 'UserNameList',
    mode: 'server',
    dependent: false,
    title: '3476', // User name
  };

  public static readonly ViewGroups: LookupOptions = {
    id: 11,
    name: 'ViewGroupList',
    cacheName: 'ViewGroupList',
    mode: 'server',
    dependent: false,
    title: '6063', // View group
  };

  public static readonly Employees: LookupOptions = {
    id: 12,
    name: 'OvedList',
    cacheName: 'OvedList',
    mode: 'server',
    dependent: false,
    title: '2', // Employee,
  };

  public static readonly PermissionProfiles: LookupOptions = {
    id: 13,
    name: 'PermProfile',
    cacheName: 'PermProfile',
    mode: 'server',
    dependent: false,
    title: '3774', // Permission profile
  };

  public static readonly ComponentTypes: LookupOptions = {
    id: 14,
    name: 'CompType',
    cacheName: 'CompType',
    mode: 'server',
    dependent: false,
    title: '6149', // Component Type
  };

  public static readonly TransactionPeriods: LookupOptions = {
    id: 15,
    name: 'CompTransType',
    cacheName: 'CompTransType',
    mode: 'server',
    dependent: false,
    title: '5869', // Transaction periods
  };

  public static readonly UploadActions: LookupOptions = {
    id: 15,
    name: 'UploadEmpAction',
    cacheName: 'UploadEmpAction',
    mode: 'server',
    dependent: false,
    title: '5748', // Action
  };

  public static readonly UploadReasons: LookupOptions = {
    id: 15,
    name: 'UploadReason',
    cacheName: 'UploadReason',
    mode: 'server',
    dependent: false,
    title: '5748', // Action
  };

  public static readonly UploadReceivedCodes: LookupOptions = {
    id: 15,
    name: 'UploadReceived',
    cacheName: 'UploadReceived',
    mode: 'server',
    dependent: false,
    title: '5748', // Action
  };

  public static readonly Funds: LookupOptions = {
    id: 16,
    name: 'KupaList',
    cacheName: 'KupaList',
    mode: 'server',
    dependent: false,
    title: '5874', // Fund
    otherXML: '<Root><PayrollMonth>{0}</PayrollMonth></Root>',
  };
}
