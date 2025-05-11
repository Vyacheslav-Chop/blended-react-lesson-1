// Задача 8

enum Role {
  Admin,
  User,
  Guest,
}

function getPermissions(role: Role): string[] {
  const { Admin, User, Guest } = Role;
  if (role === Admin) {
    return ["create", "read", "update", "delete"];
  } else if (role === User) {
    return ["read", "update"];
  } else if (role === Guest) {
    return ["read"];
  }
  return [];
}

console.log(getPermissions(Role.Admin));
console.log(getPermissions(Role.User));
console.log(getPermissions(Role.Guest));

// Завдання:

// 1. Створіть функцію getPermissions, яка приймає параметр role типу Role.

// 2. Функція має повертати масив рядків, які описують права доступу для кожної ролі:

// Admin має права: "create", "read", "update", "delete"
// User має права: "read", "update"
// Guest має лише право: "read"
// 3. Типізуйте параметр і тип повернення функції getPermissions.

// 4. Перевірте, що TypeScript не дозволяє передати в getPermissions значення, якого немає в Role.
