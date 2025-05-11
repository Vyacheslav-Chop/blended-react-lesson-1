// Задача 10

// У вас є масив імен користувачів:

const users: string[] = ["alice", "bob", "charlie"];

// Завдання:

// 1. Створіть типізовану функцію toUserObjects, яка приймає масив рядків (імен користувачів).

// 2. Усередині функції переберіть масив імен та для кожного імені створи об’єкт з такими властивостями:

// id — порядковий номер (починаючи з 1),
// name — саме ім’я користувача (рядок з масиву).
// 3. Функція повинна повертати масив отриманих об’єктів.

// 4. Переконайтеся, що результат функції має правильну типізацію, а TypeScript не видає помилок.

interface User {
  id: number;
  name: string;
}

function toUserObjects(users: string[]): User[] {
  return users.map((user, index) => ({
    id: index + 1,
    name: user,
  }));
}

// Приклад виклику:

console.log(toUserObjects(users));
// [
//   { id: 1, name: "alice" },
//   { id: 2, name: "bob" },
//   { id: 3, name: "charlie" },
// ];
