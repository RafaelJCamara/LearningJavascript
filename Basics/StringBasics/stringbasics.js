let message = "  Have a nice day sir.   "

/**
 * All of these methods don't change the original string
 */

//lowcase string
console.log(message.toLowerCase());

//uppercase string
console.log(message.toUpperCase());

//trim
console.log(message.trim());

//index of
console.log(message.trim().indexOf("nice"));
console.log(message.trim().indexOf("sir"));

//slice
console.log(message.trim().slice(0, 4));
console.log(message.trim().slice(5));

//replace
console.log(message.trim().replace("day", "week"));

//template literals
let age = 21;
let currentAge = 19;
console.log(`You must be at least ${age} to enter. Please come back in ${age - currentAge} years.`);