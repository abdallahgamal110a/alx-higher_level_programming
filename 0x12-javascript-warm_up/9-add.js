#!/usr/bin/node
// prints the addition of 2 integers

function add (a, b) {
  return parseInt(a) + parseInt(b);
}

const myarg = process.argv;
console.log(add(myarg[2], myarg[3]));
