// Задача 5

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

interface NewUser {
  name: string;
  age: number;
}

function createUser({ name, age }: NewUser): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log(createUser({ name: "Alice", age: 30 }));

// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.
