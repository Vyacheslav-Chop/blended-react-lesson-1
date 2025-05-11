// Задача 13

// Є функція reducer:
type State = number;
interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

console.log(reducer(32, { type: "increment" }));
console.log(reducer(10, { type: "decrement" }));

// Завдання:

// Типізуйте state як число.
// Створіть тип Action, що може приймати як значення лише рядки increment та decrement.
// Типізуйте функцію повністю.
