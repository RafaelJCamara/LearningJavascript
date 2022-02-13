//if-else
let age = 17;
let country = 'UK';
if (age <= 6 || age >= 65) console.log('Free ticket!');
else if (country === 'Portugal') console.log('Ticket is 25 euros.')
else console.log('Ticket is 20 pounds.');

//switch case
let dayOfWeek = 'abcef';

switch (dayOfWeek) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log('Work');
        break;
    case 'satudary':
    case 'sunday':
        console.log('weekend');
        break;
    default:
        console.log('Wrong day of the week.')
}

//ternary operator
age < 18 ? console.log("Under age") : console.log("Adult");

let userStatus = 'online';
let colorProfile = userStatus === 'offline' ? 'red' : 'green';
console.log(colorProfile);