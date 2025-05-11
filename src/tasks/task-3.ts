// Задача 3

// Опис: Є об’єкт користувача:

interface User {
  readonly id: string;
  name: string;
  age: number;
  active: boolean;
}

const user: User = { id: "1", name: "Charlie", age: 25, active: true };

const { id, name, age, active } = user;

console.log(id);
console.log(name);
console.log(age);
console.log(active);

// Завдання:

// Типізуйте user.
// Зробіть властивість id тільки для читання.
