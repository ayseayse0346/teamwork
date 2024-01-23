
// !1. soru


let month = parseInt(prompt("Enter the month (1-12 :)"));
let day = parseInt(prompt("Enter the day (1-31 :"));
if (month < 1 || month > 12 || day < 1 || day > 31) {
  console.log(
    "Invalid input. Please enter a valid month (1-12) and day (1-31)."
  );
} else if ((month == 2 && day >= 21) || (month > 2 && month < 6)) {
  console.log("spring");
} else if ((month >= 6 && month < 9) || (month == 9 && day <= 21)) {
  console.log("summer");
} else if (
  //   (month == 9 && day >= 22) ||
  month >= 9 ||
  (month == 12 && day <= 20)
) {
  console.log("Fall");
} else {
  console.log("Winter");
}


// !2. soru(artık yıl.leap year)

let year = +prompt("please enter a year !");
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year !== 0)) {
  console.log(`${year} is a leap year`);
} else {
  0;
  console.log(`${year} is not a leap year`);
}

///////////////////////////////////////

let year = prompt("please enter a year");
(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  ? console.log(year + " is a leap year")
  : console.log(year + " is not a leap year");


