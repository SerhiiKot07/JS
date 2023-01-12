const hours = 14;
const minutes = 26;
let timestring;

if (minutes > 0) {
  timestring = `${hours} г. ${minutes} хв.`;
} else {
  timestring = `${hours} г.`;
}
console.log(timestring);

// ---------------------------------------->

let link = "https://somesite.com/about";
if (link.includes("my-site") && !link.endsWith("/")) {
  link += "/";
}
console.log(link);

// ---------------------------------------

const type = typeof "4";
console.log(type);

// ---------------------------------------
// - Ввод користувача
// - Методи window.confirm() i window.prompt()
// const shouldRenew = confirm("Бажаєте подовжити підписку?");
// console.log(shouldRenew);

// const quantityA = prompt("Введіть кількість товарів");
// console.log(quantityA);
// console.log(typeof quantityA);

// let quantityB = prompt("Введіть кількість товарів");
// quantityB = Number(quantityB);
// console.log(quantityB);
// console.log(typeof quantityB);

// --------------------- parseInt()
let elementWidth = "50px";
elementWidth = parseInt(elementWidth);
console.log(elementWidth); // 50
console.log(typeof elementWidth); // number

// ------------------ parseFloat()
let elementHeigth = "123.123456px";
elementHeigth = parseFloat(elementHeigth);
console.log(elementHeigth); // 123.123456
console.log(typeof elementHeigth); // number

// ----------------- .toFixed() - кільсть символів після крапки, округлює
let salary = 130.164756789;
salary = Number(salary.toFixed(3));
console.log(salary);

// -----------------------
