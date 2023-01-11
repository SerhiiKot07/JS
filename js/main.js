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
