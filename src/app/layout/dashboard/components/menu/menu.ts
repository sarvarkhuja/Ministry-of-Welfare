import { Menu } from '../../../../core/models/types/menu.model';

// TODO: add english translation once provided
export const MENU_ITEMS: Menu[] = [
  {
    id: '1',
    text: 'מאגר עובדים',
    textInEnglish: 'Employees',
    expanded: false,
    items: [
      {
        id: '1_1',
        text: 'הצגת עובד',
        textInEnglish: 'Employees  Details',
        route: 'employees',
      },
      {
        id: '1_2',
        text: 'קלט עובד',
        textInEnglish: 'Updating Employees',
        route: 'employees',
      },
      {
        id: '1_3',
        text: 'נתונים נוספים',
        textInEnglish: 'Additional Data',
      },
      {
        id: '1_4',
        text: 'דוחות קבועים',
        textInEnglish: 'Regular Reports',
      },
      {
        id: '1_5',
        text: 'הדרכת עובדי מינהל וזכאות',
        textInEnglish: 'Admin Workers Training',
      },
      {
        id: '1_6',
        text: 'קורסים כללים',
        textInEnglish: 'General Courses',
      },
      {
        id: '1_7',
        text: 'השתלמות כללית',
        textInEnglish: 'General Trainings',
      },
      {
        id: '1_8',
        text: 'מדריכים במחלקות קטנות',
        textInEnglish: 'Small Departments',
      },
      {
        id: '1_9',
        text: 'מחולל דוחות ושאילתות',
        textInEnglish: 'Report Generator',
      },
    ],
  },
  {
    id: '2',
    text: 'מאגר תקנים',
    textInEnglish: 'Norms and Standards',
  },
  {
    id: '3',
    text: 'רישום עןובדים סוציאלים',
    textInEnglish: 'Social Workers Registration',
  },
  {
    id: '4',
    text: 'מערכת תקציב',
    textInEnglish: 'Budget System',
  },
  {
    id: '5',
    text: 'מערכת תשלומים',
    textInEnglish: 'Payments System',
  },
  {
    id: '6',
    text: 'עיבודים חדשים',
    textInEnglish: 'New Processes',
  },
  {
    id: '7',
    text: 'תחזוקת טבלאות',
    textInEnglish: 'Tables Management',
    expanded: false,
    items: [
      {
        id: '7_1',
        text: 'טבלאות תאורים',
        textInEnglish: 'Descriptions Table',
      },
      {
        id: '7_2',
        text: 'טבלת מחלקות',
        textInEnglish: 'Departments Table',
      },
      {
        id: '7_3',
        text: 'טבלת דרגות',
        textInEnglish: 'Ranks Table',
      },
      {
        id: '7_4',
        text: 'טבלת מוסדות',
        textInEnglish: 'Institutes Table',
      },
      {
        id: '7_5',
        text: 'טבלת פרמטרים',
        textInEnglish: 'Parameters Table',
      },
      {
        id: '7_6',
        text: 'טבלת קודי דוחות',
        textInEnglish: 'Reports Codes Table',
      },
      {
        id: '7_7',
        text: 'טבלת קודי ועדות',
        textInEnglish: 'Committees Codes Table',
      },
      {
        id: '7_8',
        text: 'טבלת מועצות אזוריות',
        textInEnglish: 'Local Councils Table',
      },
      {
        id: '7_9',
        text: 'טבלת לתאונות דרכים',
        textInEnglish: 'Car Accidents Table',
      },
      {
        id: '7_10',
        text: 'הערות פתוחות לרשות',
        textInEnglish: "Council's Open Remarks",
      },
    ],
  },
  {
    id: '8',
    text: 'תוכניות שרות',
    textInEnglish: 'Service Programs',
    expanded: false,
    items: [
      {
        id: '8_1',
        text: 'פרטי החברה',
        textInEnglish: 'Companies Details',
      },
      {
        id: '8_2',
        text: 'הרשאות משתמשי המערכת',
        textInEnglish: 'Users Privileges',
      },
      {
        id: '8_3',
        text: 'גיבוי נתוני המערכת',
        textInEnglish: "Backing-Up System's Data",
      },
      {
        id: '8_4',
        text: 'שיחזור נתוני המערכת',
        textInEnglish: "Restoring System's Data",
      },
      {
        id: '8_5',
        text: 'החנת  / הצגת הודעות לתזכורת',
        textInEnglish: 'Messages for Alerts',
      },
      {
        id: '8_6',
        text: 'משתמשים פעילים עכשיב ברשת',
        textInEnglish: 'Currently Active Users',
      },
    ],
  },
  {
    id: '9',
    text: 'מאגר בקרות',
    textInEnglish: 'Auditing System',
  },
];
