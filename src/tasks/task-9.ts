// Задача 9

// Завдання:

// 1. Створіть інтерфейс Container, що містить:

// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2. Створіть функцію getLastElement, яка приймає контейнер Container і повертає останній елемент контейнера.

// 3. Створіть два контейнери:

// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 4. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

// Примітка:

// Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T;
}

function getLastElement<T>(container: Container<T>): T {
  return container.items[container.items.length - 1];
}

const numberContainer: Container<number> = {
  items: [],

  addItem(item) {
    this.items.push(item);
  },

  getItem(index) {
    return this.items[index];
  },
};

const stringContainer: Container<string> = {
  items: [],

  addItem(item) {
    this.items.push(item);
  },

  getItem(index) {
    return this.items[index];
  },
};

numberContainer.addItem(2);
numberContainer.addItem(34);
numberContainer.addItem(45);
console.log(numberContainer);

stringContainer.addItem("Welcome");
stringContainer.addItem("Alice");

console.log(stringContainer);

console.log(numberContainer.getItem(1));
console.log(stringContainer.getItem(0));

console.log(getLastElement(numberContainer));
console.log(getLastElement(stringContainer));
