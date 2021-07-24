export const permissionData = [
    {
        pages: 'Roles',
        groupAccess: false,
        deny: false,
        readOnly: false,
        readWrite: true,
        name: 'roles'
    },
    {
        pages: 'System Users',
        groupAccess: false,
        deny: false,
        readOnly: false,
        readWrite: true,
        name: 'system-user',
    },
    {
        pages: 'Reports',
        groupAccess: true,
        deny: false,
        readOnly: false,
        readWrite: true,
        name: 'reports',
        groupAccessContent: [
            {
                title: 'Bank Reports',
                deny: false,
                readOnly: false,
                readWrite: true,
                name: 'groupAccessContent'
            },
            {
                title: 'Payroll Reports',
                deny: false,
                readOnly: false,
                readWrite: true,
                name: 'groupAccessContent'
            },
            {
                title: 'Miscellaneous Reports',
                deny: false,
                readOnly: false,
                readWrite: true,
                name: 'groupAccessContent'
            }
        ]
    },
    {
        pages: 'General tables',
        groupAccess: false,
        deny: false,
        readOnly: false,
        readWrite: true,
        name: 'general-tabs'
    },
    {
        pages: 'Employee list',
        groupAccess: false,
        deny: false,
        readOnly: false,
        readWrite: true,
        name: 'employee-list'
    },
    {
        pages: 'Random name',
        groupAccess: false,
        deny: false,
        readOnly: false,
        readWrite: true,
        name: 'random-name'
    },
];

export const groupAccessContent = [
    {
        title: 'Bank Reports',
        deny: false,
        readOnly: false,
        readWrite: true,
        name: 'bank-reports'
    },
    {
        title: 'Payroll Reports',
        deny: false,
        readOnly: false,
        readWrite: true,
        name: 'payroll-reports'
    },
    {
        title: 'Miscellaneous Reports',
        deny: false,
        readOnly: false,
        readWrite: true,
        name: 'misc-reports'
    }
];
