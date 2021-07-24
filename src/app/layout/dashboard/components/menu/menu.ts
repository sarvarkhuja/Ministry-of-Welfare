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
        textInEnglish: 'Employees List',
        route: 'employees',
      },
      {
        id: '1_2',
        text: 'קלט עובד',
        textInEnglish: 'Edit Employees List',
        route: 'employees',
      },
      {
        id: '1_3',
        text: 'נתונים נוספים',
        textInEnglish: 'נתונים נוספים',
      },
      {
        id: '1_4',
        text: 'דוחות קבועים',
        textInEnglish: 'דוחות קבועים',
      },
      {
        id: '1_5',
        text: 'הדרכת עובדי מינהל וזכאות',
        textInEnglish: 'הדרכת עובדי מינהל וזכאות',
      },
      {
        id: '1_6',
        text: 'קורסים כללים',
        textInEnglish: 'קורסים כללים',
      },
      {
        id: '1_7',
        text: 'השתלמות כללית',
        textInEnglish: 'השתלמות כללית',
      },
      {
        id: '1_8',
        text: 'מדריכים במחלקות קטנות',
        textInEnglish: 'מדריכים במחלקות קטנות',
      },
      {
        id: '1_9',
        text: 'מחולל דוחות ושאילתות',
        textInEnglish: 'מחולל דוחות ושאילתות',
      },
    ],
  },
  {
    id: '2',
    text: 'מאגר תקנים',
    textInEnglish: 'מאגר תקנים',
  },
  {
    id: '3',
    text: 'רישום עןובדים סוציאלים',
    textInEnglish: 'רישום עןובדים סוציאלים',
  },
  {
    id: '4',
    text: 'מערכת תקציב',
    textInEnglish: 'מערכת תקציב',
  },
  {
    id: '5',
    text: 'מערכת תשלומים',
    textInEnglish: 'מערכת תשלומים',
  },
  {
    id: '6',
    text: 'עיבודים חדשים',
    textInEnglish: 'עיבודים חדשים',
  },
  {
    id: '7',
    text: 'תחזוקת טבלאות',
    textInEnglish: 'תחזוקת טבלאות',
    expanded: false,
    items: [
      {
        id: '7_1',
        text: 'טבלאות תאורים',
        textInEnglish: 'טבלאות תאורים',
      },
      {
        id: '7_2',
        text: 'טבלת מחלקות',
        textInEnglish: 'טבלת מחלקות',
      },
      {
        id: '7_3',
        text: 'טבלת דרגות',
        textInEnglish: 'טבלת דרגות',
      },
      {
        id: '7_4',
        text: 'טבלת מוסדות',
        textInEnglish: 'טבלת מוסדות',
      },
      {
        id: '7_5',
        text: 'טבלת פרמטרים',
        textInEnglish: 'טבלת פרמטרים',
      },
      {
        id: '7_6',
        text: 'טבלת קודי דוחות',
        textInEnglish: 'טבלת קודי דוחות',
      },
      {
        id: '7_7',
        text: 'טבלת קודי ועדות',
        textInEnglish: 'טבלת קודי ועדות',
      },
      {
        id: '7_8',
        text: 'טבלת מועצות אזוריות',
        textInEnglish: 'טבלת מועצות אזוריות',
      },
      {
        id: '7_9',
        text: 'טבלת לתאונות דרכים',
        textInEnglish: 'טבלת לתאונות דרכים',
      },
      {
        id: '7_10',
        text: 'הערות פתוחות לרשות',
        textInEnglish: 'הערות פתוחות לרשות',
      },
    ],
  },
  {
    id: '8',
    text: 'תוכניות שרות',
    textInEnglish: 'תוכניות שרות',
    expanded: false,
    items: [
      {
        id: '8_1',
        text: 'פרטי החברה',
        textInEnglish: 'פרטי החברה',
      },
      {
        id: '8_2',
        text: 'הרשאות משתמשי המערכת',
        textInEnglish: 'Roles',
      },
      {
        id: '8_3',
        text: 'גיבוי נתוני המערכת',
        textInEnglish: 'גיבוי נתוני המערכת',
      },
      {
        id: '8_4',
        text: 'שיחזור נתוני המערכת',
        textInEnglish: 'שיחזור נתוני המערכת',
      },
      {
        id: '8_5',
        text: 'החנת  / הצגת הודעות לתזכורת',
        textInEnglish: 'החנת  / הצגת הודעות לתזכורת',
      },
      {
        id: '8_6',
        text: 'משתמשים פעילים עכשיב ברשת',
        textInEnglish: 'משתמשים פעילים עכשיב ברשת',
      },
    ],
  },
  {
    id: '9',
    text: 'מאגר בקרות',
    textInEnglish: 'מאגר בקרות',
  },
];
