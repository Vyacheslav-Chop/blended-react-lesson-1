// Задача 12

// Є функція sendDoneStatus:

type Callback = (value: string) => void;

function sendDoneStatus(callback: Callback): void {
  callback("done");
}

function myCallback(value: string): void {
  console.log("Function callback:", value);
}

sendDoneStatus(myCallback);
// Завдання:

// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.
