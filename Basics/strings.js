//  String slicing

const states = ['AP ','Karnataka'];
console.log(states[0]); // AP
console.log(states[1])

console.log(states[0] + states[1]);


var a = 10
var b = "10"

console.log(a+ +b);


let value = 3
let negvalue = -value
// console.log(negvalue);

console.log("1" + (2+2));

// TODO:


// ASSIGNMENT:

const gitName = new String("Kiran")
console.log(gitName);
console.log(gitName.length);
// console.log(gitName.toUpperCase());
// console.log(gitName.toLowerCase());
console.log(gitName.concat(" Kumar"));
console.log(gitName.charAt(2));
// console.log(gitName.indexOf('k')); // Why ? -1
// console.log(gitName.replace('')); // Check this

const newString = gitName.substring(0, 4); // We cant give negative numbers to the start number if we give negative it i'll be treated as 0 only
console.log(newString);

const anotherString = gitName.slice(0,2);
console.log(anotherString)


const name = "Busari Kumar"
console.log(name.replace(' ', ' Kiran '));

console.log(name.includes('Busari'));
console.log('kiran');

console.log(gitName.endsWith('n'));