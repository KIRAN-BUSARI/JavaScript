"use strict"; // used to run code or act code as a newer version by default it ll be ready we don't need to make in modren pc's

// alert('Hello World');

// console.log(typeof null);
// console.log(typeof undefined);

let score = "100";
console.log(typeof (score));
console.log(typeof score);
console.log();

let loggedIn = 'kiran'
console.log(Boolean(loggedIn));

// "kiran" => true
// 0 => flase 1 => true
// "" => false

let number = 100
console.log(number);
let numToString = String(number)
console.log(numToString);
// console.log(String());
console.log(typeof numToString);

// Premitive DataTypes
// 7 Types : String,Number,Boolean, undefined, symbol,null,BigInt


const toString = "    Kiran   "
console.log(toString);
console.log(toString.trim());



// Try includes, replace, split


let userOne = {
    email: "user@gmail.com",
    upi: "123456789@ybl"
}
console.log(userOne);

let userTwo = userOne

userTwo.email = "Kiran@gmail.com"

// console.log("User One Email:", userOne.email," User Two Email:", userTwo.email );
console.log(userTwo.email); // Same
console.log(userOne.email); // Same