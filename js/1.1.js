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
const shouldRenew = confirm("Бажаєте подовжити підписку?");
console.log(shouldRenew);

const quantityA = prompt("Введіть кількість товарів");
console.log(quantityA);
console.log(typeof quantityA);

let quantityB = prompt("Введіть кількість товарів");
quantityB = Number(quantityB);
console.log(quantityB);
console.log(typeof quantityB);

// ------------------------------------
