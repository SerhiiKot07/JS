// ------ Псевдомасив arguments ------------
// Доступ до списку всіх аргументів можна отримати за допомогою спеціальної змінної arguments, яка доступна тільки всередині функції і зберігає всі аргументи у якості псевдомасиву.

// Псевдомасив - колекція з властивістю length і можливістю звернутися до елементу за індексом, але відсутністю більшості методів для роботи з масивом.

// Розглянемо приклад використання arguments у функції, яка множить будь-яку кількість аргументів:

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// =======================================================

//  ------ Перетворення псевдомасиву -----------------------

// function fn(...args) {
//   // Змінна args буде містити повноцінний масив
//   let total = 1;
//   for (const arg of args) {
//     total *= arg;
//   }
//   return total;
// }
// console.log(fn(1, 2, 3)); //  6
// console.log(fn(1, 2, 3, 4)); //  24
// console.log(fn(1, 2, 3, 4, 5)); //  120
// =================================================
