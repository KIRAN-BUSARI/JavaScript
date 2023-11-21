// console.log(undefined == 0);
// a = "2"
// console.log(a,typeof a);
// b = 2
// console.log(b,typeof b);

// console.log("2" == 2); // This will only check the value not the Datatype of the variable it will return true and it will perform conversion of Datatype

// console.log("2" === 2); // This will check both the value and the Datatype of the variable it will return false

// console.log("2" > 1);
// c = 0.2 // This is also a number datatype
// console.log(c, typeof c);

// // DataTypes in javascript

// d = null
// console.log(`this is a object type ${d}`, typeof d);

e = true;
f = false;
g = e || f;
h = g && (3 < 4) ? 'yes' : 'no';
i = h === 'yes' ? 'true' : 'false';
console.log(e);
console.log(!e);

console.log(g);
console.log(h);
console.log(i);

console.log(null > 0);