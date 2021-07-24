/*
    - At least 6 characters in length
    - Lowercase letters
    - Uppercase letters
    - Numbers
    - Special characters
*/
export const PASSWORD_PATTERN = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,}';
