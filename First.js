const name = 'kiran'
var email = 'Kiran@123.com' // We often prefer not to use var because it causes issues in scpoe i.e {This is Scope } and we more user const or let
let password = 'Kiran@123'

email = 'kishore@123.com'
password = 'kishore#234'

console.log(`Hello ${name} This is ur First JavaScript code....!🥳`);
console.log(email);
// name = 'kishore' We can't assign as it is a constant.
// console.log(password);
console.log(`${password} is a secure password`);

console.table([name, password, `This is ur email ${email}`])


console.log("This is for day 1");
