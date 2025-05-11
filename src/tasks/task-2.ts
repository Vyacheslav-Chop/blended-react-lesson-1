// Задача 2

// Опис: Є функція, яка приймає суму (число) та тип валюти.
// type Currency = "USD" | "EUR" | "UAH";

// function convertCurrency(amount: number, currency: Currency): void {
//   console.log(`Converting ${amount} to ${currency}`);
// }

// convertCurrency(30, 'USD')

// Завдання:

// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.

type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrency {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertCurrency): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 25, currency: "EUR" });
